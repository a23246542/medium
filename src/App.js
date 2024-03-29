import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import store from './store';
import { ResetStyle, GlobalStyle } from './style';
import { IconFont } from './assets/statics/iconfont/iconfont';
import './style.js';
import Header from './common/header';
import RouterView from './route';

function App() {
  smoothscroll.polyfill();
  return (
    <Provider store={store}>
      <Router>
        <ResetStyle />
        <GlobalStyle />
        <IconFont />
        <Header />
        <RouterView />
      </Router>
    </Provider>
  );
}

export default App;
