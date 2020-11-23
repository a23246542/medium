import React from 'react';
// import PropTypes from 'prop-types';
import { LoginWrapper, LoginBox, Input, Button } from './style';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <Input>
          <i className="fas fa-user"></i>
          <input type="text" placeholder="請輸入帳號"/>
        </Input>
        <Input>
          <i className="fas fa-unlock-alt"></i>
          <input type="text" placeholder="請輸入帳密"/>
        </Input>
        <Button>登陸</Button>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;


// Login.propTypes = {

// };

