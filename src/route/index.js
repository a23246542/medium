import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Layout from '../common/layout';
import HomePage from '../pages/homePage';
// import Detail from '../pages/detail/loadable';
import Detail from '../pages/detail';

const RouterView = () => {
  const match = useRouteMatch();
  console.log(match);
  const path = '';
  const LayoutRouter = (
    <Layout>
      <Switch>
        <Route exact path={`${path}`} render={() => <HomePage />} />
        {/* <Route path={`${path}/detail`} render={() => <Detail />} /> */}
        <Route path={`${path}/detail`} render={() => <HomePage />} />
      </Switch>
    </Layout>
  );
  return (
    <Switch>
      {/* <Route path="/home" render={() => <Home />} /> */}
      <Route path="/home" render={() => LayoutRouter} />
      <Route path="/login" render={() => <Login />} />
    </Switch>
  );
};

export default RouterView;
