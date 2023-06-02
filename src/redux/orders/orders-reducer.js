import {
  addOrderRequest,
  addOrderSuccess,
  addOrderError,
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersError,
  changeName,
  changeEmail,
  changePhone,
  changeAddress
} from './orders-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const addOrderLoading = createReducer(false, {
  [addOrderRequest]: () => true,
  [addOrderSuccess]: () => false,
  [addOrderError]: () => false,
});

const addOrderErrors = createReducer(null, {
  [addOrderError]: (_, { payload }) => payload,
  [addOrderRequest]: () => null,
});


const orders = createReducer([], {
  [fetchOrdersSuccess]: (_, { payload }) => payload,
  [fetchOrdersError]: () => [],
});

const ordersLoading = createReducer(false, {
  [fetchOrdersRequest]: () => true,
  [fetchOrdersSuccess]: () => false,
  [fetchOrdersError]: () => false,
});

const ordersError = createReducer(null, {
  [fetchOrdersError]: (_, { payload }) => payload,
  [fetchOrdersRequest]: () => null,
});

const name = createReducer('', {
  [changeName]: (_, { payload }) => payload,
});
const email = createReducer('', {
  [changeEmail]: (_, { payload }) => payload,
});
const phone = createReducer('', {
  [changePhone]: (_, { payload }) => payload,
});
const address = createReducer('', {
  [changeAddress]: (_, { payload }) => payload,
});

export default combineReducers({
  addOrderLoading,
  addOrderErrors,
  orders,
  ordersLoading,
  ordersError,
  name,
  email,
  phone,
  address,
});
