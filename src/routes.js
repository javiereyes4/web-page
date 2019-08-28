import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App  from './components/App/App';
import We from './components/views/We/We'
import Home from './components/views/Home/Home'
import Product from './components/views/Product/Product'
import Contact from './components/views/Contact/Contact'
import Bio from './components/views/Bio/Bio'


const AppRoutes = () =>
  // eslint-disable-next-line no-unused-expressions
  <App>
    <Switch>
      <Route path='/Home' component= { Home }></Route>
      <Route path='/We' component= { We }></Route>
      <Route path='/Product' component= { Product }></Route>
      <Route path='/Bio' component= { Bio }></Route>
      <Route path='/Contact' component= { Contact }></Route>
      <Route  component= { Home }></Route>
    </Switch>
  </App>

export default AppRoutes;
