import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { LoginWrapper, LoginBox, Input, Button, ErrMsg } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { Redirect, useLocation } from 'react-router-dom';
import { actions as loginActions } from '../../store/login';

const Login = () => {
  const dispatch = useDispatch();
  let inputRef = useRef(null);
  const [id, setId] = useState('');
  // const [account, setAccount] = useState('');
  // const [password, setPassword] = useState('');
  const username = useSelector((state) => state.getIn(['login', 'username']));
  const password = useSelector((state) => state.getIn(['login', 'password']));
  const error = useSelector((state) => state.getIn(['login', 'error']));
  const isLogin = useSelector((state) => state.getIn(['login', 'isLogin']));
  const { search } = useLocation();
  const [redirectUrl, setRedirectUrl] = useState('');

  const getRedirectUrlBySearch = (search) => {
    const query = new URLSearchParams(search);
    const url = query.get('url') || '/';
    return url;
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (isLogin) {
      setRedirectUrl(getRedirectUrlBySearch(search));
    }
  }, [isLogin, search]);

  // useEffect(() => {
  //   alert(error);
  // }, [error]);
  // console.count('login render');

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'username':
        // setAccount(e.target.value);
        dispatch(loginActions.setUsername(e.target.value));
        break;
      case 'password':
        // setPassword(e.target.value);
        dispatch(loginActions.setPassword(e.target.value));
        break;
      default:
        break;
    }
  };

  const signIn = () => {
    dispatch(loginActions.login()).then(() => {
      // setTimeout(() => {
      //   console.log(error);
      //   error && alert(error);
      // }, 100);
      // console.log(3);
    });
  };

  if (!isLogin) {
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
  } else {
    return <Redirect to={redirectUrl} />;
  }
};

export default Login;

// Login.propTypes = {

// };
