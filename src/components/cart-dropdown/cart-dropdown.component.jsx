import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../+store/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
