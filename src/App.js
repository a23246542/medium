import React,{Fragment} from 'react';
import { Provider } from 'react-redux'
import store from './store';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import './style.js';
import Header from './common/header';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle/>
        <IconFont/>
        <Header/>
      </Fragment>
    </Provider>
  );
}

export default App;
