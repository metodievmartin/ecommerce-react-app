import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from 'components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import AuthPage from 'pages/auth-page/auth-page.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
