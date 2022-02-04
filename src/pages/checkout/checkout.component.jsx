import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../+store/cart/cart.selectors';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../+store/cart/cart.actions';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const clearItemHandler = cartItem => {
    dispatch(clearItemFromCart(cartItem));
  };

  const removeItemHandler = cartItem => {
    dispatch(removeItemFromCart(cartItem));
  };

  const addItemHandler = cartItem => {
    dispatch(addItemToCart(cartItem));
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(cartItem => (
        <CheckoutItem
          key={cartItem.id}
          item={cartItem}
          clearItemHandler={() => clearItemHandler(cartItem)}
          removeItemHandler={() => removeItemHandler(cartItem)}
          addItemHandler={() => addItemHandler(cartItem)}
        />
      ))}

      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
