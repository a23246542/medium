import React,{ useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  let ref  = useRef();
  let inputRef  = useRef(null);
  const [id,setId] = useState('');
  const [account,setAccount] = useState('');
  const [password,setPassword] = useState('');
  const isLogin = useSelector((state) => state.getIn(['login','isLogin']))


  // const changeId = (e) => {
  //   setId(e.target.value);
  //   console.log(e.target.value);
  //   console.log(inputRef.current.value);

  //   // console.log(ref.id);
  //   console.log(id);//還沒更新會拿到前一次的值

  // }

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'account':
        setAccount(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  const signIn = () => {
    if ( account && password) {
      dispatch(actionCreators.signIn({account,password}));
    } else {
      alert('帳密未輸入');
    }
  }

  // return (
      if (!isLogin) {
        return (
          <LoginWrapper>
            <LoginBox>
              <Input>
                <i className="fas fa-user"></i>
                <input
                  value={account}
                  type="text"
                  placeholder="請輸入帳號"
                  ref={inputRef}
                  name="account"
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
        )
      } else {
        return <Redirect to="/"/>
      }
  // );
};

export default Login;


// Login.propTypes = {

// };

