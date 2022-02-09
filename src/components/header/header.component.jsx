import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { authSignOut } from '../../firebase/firebase.auth';
import { getCurrentUser } from '../../+store/user/user.selectors';
import './header.styles.scss';

const Header = () => {
  const currentUser = useSelector(getCurrentUser);
  
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={authSignOut}>
            SIGN OUT {currentUser.displayName?.toUpperCase()}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
