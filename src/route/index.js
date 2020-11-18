import React, { Fragment} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from "../pages/home";
import Detail from "../pages/detail";
import Topic from '../pages/home/components/Topic';
import Article from '../pages/home/components/Article';
import HomePage from '../pages/homePage'

const RouterView = () => {
  return (
    <Switch>
      <Route path="/home" exact render={()=><Home/>}>
      </Route>
      {/* <Route path="/home/" render={()=>{
         return (
          <Fragment>
            <img className="banner-img" alt="Banner" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
            <Topic/>
            <Article/>
          </Fragment>
        );
      }} /> */}
      {/* <Route path="/home/detail" render={()=><Detail/>}/> */}
      {/* <Route path="login"/> */}
    </Switch>
  )
}

export default RouterView
