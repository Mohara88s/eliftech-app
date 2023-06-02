import { createAction } from '@reduxjs/toolkit';

export const addOrderRequest = createAction('orders/addOrderRequest');
export const addOrderSuccess = createAction('orders/addOrderSuccess');
export const addOrderError = createAction('orders/addOrderError');

export const fetchOrdersRequest = createAction('orders/fetchOrdersRequest');
export const fetchOrdersSuccess = createAction('orders/fetchOrdersSuccess');
export const fetchOrdersError = createAction('orders/fetchOrdersError');

export const fetchOrderByIdRequest = createAction(
  'orders/fetchOrderByIdRequest',
);
export const fetchOrderByIdSuccess = createAction(
  'orders/fetchOrderByIdSuccess',
);
export const fetchOrderByIdError = createAction('orders/fetchOrderByIdError');

export const changeName = createAction('orders/changeName');
export const changeEmail = createAction('orders/changeEmail');
export const changePhone = createAction('orders/changePhone');
export const changeAddress = createAction('orders/changeAddress');
