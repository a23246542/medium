import React from 'react';
import { BackTop } from '../style';

const BackTopComponent = ({ isShowBackTop, handleScrollTop }) => {
  return isShowBackTop ? (
    <BackTop onClick={handleScrollTop}>回到上方</BackTop>
  ) : null;
};

export default BackTopComponent;
