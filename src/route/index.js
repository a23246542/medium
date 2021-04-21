import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';

const RouterView = () => {
  return (
    <Switch>
      <Route path="/home" render={() => <Home />} />
      <Route path="/login" render={() => <Login />} />
    </Switch>
  );
};

export default RouterView;
