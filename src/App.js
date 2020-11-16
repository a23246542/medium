import React,{Fragment} from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import store from './store';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import './style.js';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Article from './pages/home/components/Article';

function App() {
  smoothscroll.polyfill();
  return (
    <Provider store={store}>
      <Router>
        {/* <Switch> */}
          <GlobalStyle/>
          <IconFont/>
          <Header/>
          {/* <Route></Route> */}
          <Redirect from="/" to="/home"/>
          {/* <Route path="/home" exact component={Home}></Route> */}
          <Switch>
            <Route
              path="/home"
              component={
                () =>
                 <Home>
                   <Route
                    render={(props) => {
                      // console.log(props);
                      // 以目前需求簡化成如下判斷式
                      if (props.location.pathname === "/home") {
                        return <Article/>;
                      } else if (props.location.pathname === "/home/detail") {
                      // } else {
                        return <Detail/>;
                      }
                    }}
                   />
                 </Home>
              }
            />
          </Switch>
          {/* <Route path="/detail/home" exact component={Detail}></Route> */}
        {/* </Switch> */}
      </Router>
    </Provider>
  );
}

export default App;
