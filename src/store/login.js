import { fromJS } from 'immutable';
import api from '../api';
// import { logout } from '../pages/login/store/actionCreators';

const initialState = fromJS({
  username: localStorage.getItem('username') || '',
  password: '',
  isLoading: false,
  login: localStorage.getItem('login') || false,
  error: '',
});

const actionTypes = {
  LOGIN: 'LOGIN/LOGIN',
  LOGOUT: 'LOGIN/LOGOUT',
  LOGIN_SUCCESS: 'LOGIN/LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN/LOGIN_FAIL',
  LOGIN_REQUESTED: 'LOGIN/LOGIN_REQUESTED',
  SET_USERNAME: 'LOGIN/SET_USERNAME',
  SET_PASSWORD: 'LOGIN/SET_PASSWORD',
};

//TODO reducer調到後面
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set('isLoading', true);
    case actionTypes.LOGIN_SUCCESS:
      return state.set('login', true);
    case actionTypes.LOGIN_FAIL:
      return state.set('error', action.error);
    case actionTypes.LOGIN_REQUESTED:
      return state.set('isLoading', false);
    case actionTypes.LOGOUT:
      return state.merger({
        username: '',
        password: '',
        login: false,
        isLoading: false,
      });
    case actionTypes.SET_USERNAME:
      return state.set('username', action.username);
    case actionTypes.SET_PASSWORD:
      return state.set('password', action.password);
    default:
      return state;
  }
};

export const actions = {
  login: () => {
    return async (dispatch, getState) => {
      // console.log(getState().getIn(['login', 'username']));
      const username = getState().getIn(['login', 'username']);
      const password = getState().getIn(['login', 'password']);
      // const { username, password } = getState().login;
      if (!(username?.length > 0 && password?.length > 0)) {
        dispatch(loginFail('帳號密碼不能為空'));
        return;
      }
      dispatch(login());
      await api
        .signIn({ username, password })
        .then((res) => {
          const result = res.data.data.success;
          if (result) {
            localStorage.setItem('username', username);
            localStorage.setItem('login', true);
            dispatch(loginSuccess());
          } else {
            dispatch(loginFail(res.data.data.message));
          }
        })
        .catch((err) => {
          dispatch(loginFail(err));
        })
        .finally(() => {
          dispatch(loginRequested());
        });
      // try {
      //   const res = await api.signIn({ username, password });
      //   const result = res.data.data.success;
      //   if (result) {
      //     localStorage.setItem('username', username);
      //     localStorage.setItem('login', true);
      //     await dispatch(loginSuccess());
      //   } else {
      //     await dispatch(loginFail(res.data.data.message));
      //   }
      // } catch (err) {
      //   dispatch(loginFail(err));
      // } finally {
      //   dispatch(loginRequested());
      // }
    };
  },
  logout: () => {
    return async (dispatch) => {
      localStorage.removeItem('username');
      localStorage.removeItem('login');
      dispatch(logout());
    };
  },
  setUsername: (username) => ({
    type: actionTypes.SET_USERNAME,
    username,
  }),
  setPassword: (password) => ({
    type: actionTypes.SET_PASSWORD,
    password,
  }),
};

const login = () => ({
  type: actionTypes.LOGIN,
});

const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});

const loginFail = (error) => ({
  type: actionTypes.LOGIN_FAIL,
  error,
});

const loginRequested = () => ({
  type: actionTypes.LOGIN_REQUESTED,
});

const logout = () => ({
  type: actionTypes.LOGOUT,
});
