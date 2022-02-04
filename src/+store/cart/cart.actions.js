import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_DROPDOWN,
} from './cart.action-types';

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const addItemToCart = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});
