import { Switch, Route } from 'react-router-dom';
 // eslint-disable-next-line
import React, { Component }  from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
