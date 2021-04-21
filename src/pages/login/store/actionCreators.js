import api from '../../../api';
import { actionTypes } from './index';

const login = () => ({
  type: actionTypes.LOGIN,
  value: true,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false,
});

export const signIn = ({ account, password }) => {
  return (dispatch) => {
    api.signIn({ account, password }).then((res) => {
      const result = res.data.data.success;
      // console.log(res);
      if (result) {
        dispatch(login());
      } else {
        alert('登入失敗，請稍後再試');
      }
    });
  };
};
