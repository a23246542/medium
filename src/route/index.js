import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Layout from '../common/layout';
import HomePage from '../pages/homePage';
import Detail from '../pages/detail/loadable';
// import Detail from '../pages/detail';

const RouterView = () => {
  // const { path } = useRouteMatch(); // path會只有/
  const LayoutRouter = ({ match: { path } }) => (
    <Layout>
      <Switch>
        {/* <Route exact path="" render={() => <HomePage />} /> */}
        <Route exact path={path} render={() => <HomePage />} />
        <Route path={`${path}/detail`} render={() => <Detail />} />
      </Switch>
    </Layout>
  );

  return (
    <Switch>
      {/* <Route path="/home" render={() => <Home />} /> */}
      <Route path="/home" render={(props) => LayoutRouter(props)} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default RouterView;
