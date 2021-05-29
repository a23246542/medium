import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Layout from '../common/layout';
import HomePage from '../pages/homePage';
import Writing from '../pages/writing';

const LazyDetailPage = lazy(() => import('../pages/detail'));

const RouterView = () => {
  const LayoutRouter = ({ match: { path } }) => (
    <Layout>
      <Switch>
        <Route exact path={path} render={() => <HomePage />} />
        <Route path={`${path}/detail`} render={() => <LazyDetailPage />} />
      </Switch>
    </Layout>
  );

  return (
    <Suspense fallback={<div>正在加載</div>}>
      <Switch>
        <Route path="/home" render={(props) => LayoutRouter(props)} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/writing" render={() => <Writing />} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default RouterView;
