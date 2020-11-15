import React,{Fragment} from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import store from './store';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import './style.js';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail'

function App() {
  smoothscroll.polyfill();
  return (
    <Provider store={store}>
        <Router>
          <GlobalStyle/>
          <IconFont/>
          <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
        </Router>
    </Provider>
  );
}

export default App;
