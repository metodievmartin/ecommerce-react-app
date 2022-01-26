import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import AuthPage from './pages/auth-page/auth-page.component';
import { onMyAuthStateChanged } from './firebase/firebase.auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authUnsubscribe = onMyAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      authUnsubscribe();
    };
  }, []);

  return (
    <div>
      <Header currentUser={user}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
