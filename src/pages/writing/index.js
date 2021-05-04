import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Writing = () => {
  const isLogin = useSelector((state) => state.getIn(['login', 'isLogin']));
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      history.push('/home');
    }
  }, [isLogin, history]);

  return <p>施工中</p>;
};

export default Writing;
