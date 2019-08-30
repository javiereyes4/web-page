import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import We from './components/views/We/We'
import Home from './components/views/Home/Home'
import Product from './components/views/Product/Product'
import Contact from './components/views/Contact/Contact'
import Bio from './components/views/Bio/Bio'


const AppRoutes = () =>
  // eslint-disable-next-line no-unused-expressions
    <HashRouter>
      <Switch>
        <Route exact path='/Home' component= { Home }></Route>
        <Route exact path='/We' component= { We }></Route>
        <Route exact path='/Product' component= { Product }></Route>
        <Route exact path='/Bio' component= { Bio }></Route>
        <Route exact path='/Contact' component= { Contact }></Route>
        <Route exact component= { Home }></Route>
      </Switch>
    </HashRouter>

export default AppRoutes;
