import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import AuthPage from './pages/auth-page/auth-page.component';
import { onMyAuthStateChanged } from './firebase/firebase.auth';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './+store/user/user.actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authUnsubscribe = onMyAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRefSnapshot = await createUserProfileDocument(userAuth);

        userRefSnapshot(snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }

      dispatch(setCurrentUser(userAuth))
    });

    return () => {
      authUnsubscribe();
    };
  }, [dispatch]);

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
