import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from "../pages/home";

const RouterView = () => {
  return (
    <Switch>
      <Route path="/home" render={()=><Home/>}>
      </Route>
    </Switch>
  )
}

export default RouterView
