import React from 'react';
import { useDispatch } from 'react-redux';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../+store/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import { useHistory } from 'react-router-dom';
import { toggleCartDropdown } from '../../+store/cart/cart.actions';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    history.push('/checkout');
    dispatch(toggleCartDropdown());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleOnClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
