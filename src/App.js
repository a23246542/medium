import React,{Fragment} from 'react';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import './style.js';
import Header from './common/header';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <IconFont/>
      <Header/>
    </Fragment>
  );
}

export default App;
