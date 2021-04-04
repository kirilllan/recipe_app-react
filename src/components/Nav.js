import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
  <BrowserRouter>
    <Switch>
      <Link to="/">Home!</Link>
    </Switch>
  </BrowserRouter>
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  <Link to={{ pathname: "https://google.com"}} target="_top">&nbsp;..leave</Link>
  </div>
)};

export default Nav;