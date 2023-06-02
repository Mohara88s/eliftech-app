import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction(
  'cart/addToCart',
);
export const removeFromCart = createAction(
  'cart/removeFromCart',
);
export const clearCart = createAction(
  'cart/clearCart',
);
export const updateCart = createAction(
  'cart/updateCart',
);