import React,{Fragment} from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import store from './store';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import './style.js';
import Header from './common/header';
import RouterView from './route';

function App() {
  smoothscroll.polyfill();
  return (
    <Provider store={store}>
      <Router>
          <GlobalStyle/>
          <IconFont/>
          <Header/>
          {/* <Redirect from="/" to="/home"/> */}
          <Route path="/" exact>
            <Redirect to="/home"/>
          </Route>
          <RouterView/>
      </Router>
    </Provider>
  );
}

export default App;
