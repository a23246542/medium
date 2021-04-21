import React from 'react';
import { Wrapper, Main, Aside } from './style';
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Aside />
    </Wrapper>
  );
};

export default Layout;
