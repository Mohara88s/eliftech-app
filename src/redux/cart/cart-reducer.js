import {
  addToCart,
  removeFromCart,
  clearCart,
  updateCart
} from './cart-actions';
import {
  setActualShop
} from '../shops/shops-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const cart = createReducer([], {
  [addToCart]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeFromCart]: (state, { payload }) =>
    state.filter(e => e.good._id !== payload._id),
  [clearCart]: () => [],
  [updateCart]: (state, { payload }) => {
    return state.map(item => {
      if (item.good._id === payload._id) {
        return { good: { ...item.good }, quantity: payload.quantity }
      } else return item
    })
  },
  [setActualShop]: () => [],
});

export default combineReducers({
  cart
});
