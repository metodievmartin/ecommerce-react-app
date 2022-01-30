import React from 'react';
import { useDispatch } from 'react-redux';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../+store/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggleCartDropdownHandler =() => {
    dispatch(toggleCartDropdown());
  }
  
  return (
    <div className="cart-icon" onClick={toggleCartDropdownHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
