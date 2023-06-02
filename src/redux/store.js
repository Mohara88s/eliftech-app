import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import shopsReducer from './shops/shops-reducer';
import cartReducer from './cart/cart-reducer';
import ordersReducer from './orders/orders-reducer';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});


