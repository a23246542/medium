import React, { useRef, useEffect } from 'react';
import { LoginWrapper, LoginBox, Input, Button, ErrMsg } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { actions as loginActions } from '../../store/login';

const Login = () => {
  const dispatch = useDispatch();
  let inputRef = useRef(null);
  const username = useSelector((state) => state.getIn(['login', 'username']));
  const password = useSelector((state) => state.getIn(['login', 'password']));
  const error = useSelector((state) => state.getIn(['login', 'error']));
  const isLogin = useSelector((state) => state.getIn(['login', 'isLogin']));
  const { search } = useLocation();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'username':
        dispatch(loginActions.setUsername(e.target.value));
        break;
      case 'password':
        dispatch(loginActions.setPassword(e.target.value));
        break;
      default:
        break;
    }
  };

  const signIn = () => {
    dispatch(loginActions.login());
  };

  const getRedirectUrlBySearch = (search) => {
    const query = new URLSearchParams(search);
    const url = query.get('url') || '/';
    return url;
  };

  if (isLogin) {
    return <Redirect to={getRedirectUrlBySearch(search)} />;
  }

  return (
    <LoginWrapper>
      <LoginBox>
        <ErrMsg>{error && `*${error}`}</ErrMsg>
        <Input>
          <i className="fas fa-user"></i>
          <input
            value={username}
            type="text"
            placeholder="請輸入帳號"
            ref={inputRef}
            name="username"
            onChange={handleInputChange}
          />
        </Input>
        <Input>
          <i className="fas fa-unlock-alt"></i>
          <input
            value={password}
            type="password"
            placeholder="請輸入帳密"
            name="password"
            onChange={handleInputChange}
          />
        </Input>
        <Button onClick={signIn}>登陸</Button>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
