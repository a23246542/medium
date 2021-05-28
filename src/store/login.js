import { fromJS } from 'immutable';
import api from '../api';
import utils from '../utils';

const initialState = fromJS({
  username: utils.getUserName() || '',
  password: '',
  isLoading: false,
  isLogin: utils.getUserName() ? true : false,
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
  SET_ERRORMSG: 'LOGIN/SET_ERRORMSG',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set('isLoading', true);
    case actionTypes.LOGIN_SUCCESS:
      return state.set('isLogin', true);
    case actionTypes.LOGIN_FAIL:
      return state.set('error', action.error);
    case actionTypes.LOGIN_REQUESTED:
      return state.set('isLoading', false);
    case actionTypes.LOGOUT:
      return state.merge({
        username: '',
        password: '',
        isLogin: false,
        isLoading: false,
      });
    case actionTypes.SET_USERNAME:
      return state.set('username', action.username);
    case actionTypes.SET_PASSWORD:
      return state.set('password', action.password);
    case actionTypes.SET_ERRORMSG:
      return state.set('error', action.errMsg);
    default:
      return state;
  }
};

export const actions = {
  login: () => {
    return async (dispatch, getState) => {
      const username = getState().getIn(['login', 'username']);
      const password = getState().getIn(['login', 'password']);
      if (!(username?.length > 0 && password?.length > 0)) {
        dispatch(loginFail('帳號密碼不能為空'));
        return;
      }
      dispatch(login());
      await api
        .signIn({ username, password })
        .then((res) => {
          if (!res.data.data.success) {
            utils.setUsername('');
            return dispatch(loginFail(res.data.data.message));
          }
          utils.setUsername(username);
          dispatch(loginSuccess());
          dispatch(setErrorMsg(''));
        })
        .catch((err) => {
          utils.setUsername('');
          dispatch(loginFail(err));
        })
        .finally(() => {
          dispatch(loginRequested());
        });
    };
  },
  logout: () => {
    return async (dispatch) => {
      utils.setUsername('');
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

const setErrorMsg = (errMsg) => ({
  type: actionTypes.SET_ERRORMSG,
  errMsg,
});
