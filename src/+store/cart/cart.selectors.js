export const getCartDropdownIsHidden = state => state.cart.hidden;

export const getCartItems = state => state.cart.cartItems;

export const getCartItemsQuantity = state =>
  state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );
