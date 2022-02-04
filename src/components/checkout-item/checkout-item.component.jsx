import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, clearItemHandler, removeItemHandler, addItemHandler }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={removeItemHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItemHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">${price} per unit</span>
      <div onClick={clearItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
