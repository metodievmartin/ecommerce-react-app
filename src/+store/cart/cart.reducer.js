import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_DROPDOWN,
} from './cart.action-types';
import { addItemToCartHelper, removeItemFromCartHelper } from './cart.util';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartHelper(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ),
      };
      case REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCartHelper(state.cartItems, action.payload),
        };
    default:
      return state;
  }
};

export default cartReducer;
