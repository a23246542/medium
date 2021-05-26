import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import webConstructionImg from '../../assets/writing/web-construction.png';
import {
  WebConstruction,
  WebConstructionImgWrap,
  WebConstructionContent,
  GoBackHomeLink,
} from './style';
import webConstructionImg from '../../assets/writing/web-construction.png';

const Writing = () => {
  const isLogin = useSelector((state) => state.getIn(['login', 'isLogin']));
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      history.push('/home');
    }
  }, [isLogin, history]);

  return (
    <WebConstruction>
      <WebConstructionContent>
        <div className="title">
          WEBPAGE IS UNDER
          <br />
          CONSTRUCTION
        </div>
        <GoBackHomeLink to="/">返回首頁</GoBackHomeLink>
      </WebConstructionContent>
      <WebConstructionImgWrap>
        <img src={webConstructionImg} alt="網頁施工中" />
      </WebConstructionImgWrap>
    </WebConstruction>
  );
};

export default Writing;
