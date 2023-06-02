import { createAction } from '@reduxjs/toolkit';

export const fetchShopsRequest = createAction(
  'shops/fetchShopsRequest',
);
export const fetchShopsSuccess = createAction(
  'shops/fetchShopsSuccess',
);
export const fetchShopsError = createAction(
  'shops/fetchShopsError',
);

export const setActualShop = createAction(
  'shops/setActualShop',
);