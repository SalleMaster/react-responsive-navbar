import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../home/Home';
import Products from '../products/Products';
import Users from '../users/Users';
import About from '../about/About';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
