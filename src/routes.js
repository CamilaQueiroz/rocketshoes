import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
