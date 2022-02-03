import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../+store/cart/cart.actions';
import { selectCartItemsQuantity } from '../../+store/cart/cart.selectors';

const CartIcon = () => {
  const [animate, setAnimate] = useState(false);
  const isMounting = useRef(true);
  const dispatch = useDispatch();
  const quantity = useSelector(selectCartItemsQuantity);

  useEffect(() => {
    if (isMounting.current) {
      isMounting.current = false; //No animation on initial mount
    } else {
      setAnimate(true); // Set animate to true
    }
  }, [quantity]); //Only run useEffect if quantity has changed

  const toggleCartDropdownHandler = () => {
    dispatch(toggleCartDropdown());
  };

  const classes = `cart-icon ${animate ? 'animate-icon' : ''}`;

  return (
    <div
      className={classes}
      onClick={toggleCartDropdownHandler}
      onAnimationEnd={() => setAnimate(false)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};;

export default CartIcon;
