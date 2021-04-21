import React from 'react';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { Wrapper, Main, Aside } from './style';
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Aside>
        <Recommend />
        <Writer />
      </Aside>
    </Wrapper>
  );
};

export default Layout;
