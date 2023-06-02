import {
  fetchShopsSuccess,
  fetchShopsRequest,
  fetchShopsError,
  setActualShop
} from './shops-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const shops = createReducer([], {
  [fetchShopsSuccess]: (_, { payload }) => payload,
  [fetchShopsError]: () => [],
});

const loading = createReducer(false, {
  [fetchShopsRequest]: () => true,
  [fetchShopsSuccess]: () => false,
  [fetchShopsError]: () => false,
});

const error = createReducer(null, {
  [fetchShopsError]: (_, { payload }) => payload,
  [fetchShopsRequest]: () => null,
});
const actualShop = createReducer(null, {
  [setActualShop]: (_, { payload }) => payload,
});

export default combineReducers({
  shops,
  loading,
  error,
  actualShop
});
