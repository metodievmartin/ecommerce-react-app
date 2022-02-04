export const selectCartDropdownIsHidden = state => state.cart.hidden;

export const selectCartItems = state => state.cart.cartItems;

export const selectCartItemsQuantity = state =>
  state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

export const selectCartTotal = state =>
  state.cart.cartItems.reduce(
    (accumulatedTotal, cartItem) => accumulatedTotal + cartItem.quantity * cartItem.price,
    0
  );
