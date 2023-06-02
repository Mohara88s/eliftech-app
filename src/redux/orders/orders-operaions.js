import {
  addOrderRequest,
  addOrderSuccess,
  addOrderError,
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersError,
  fetchOrderByIdRequest,
  fetchOrderByIdSuccess,
  fetchOrderByIdError,
} from './orders-actions';
import axios from 'axios';

export const addOrder = order => async dispatch => {
  dispatch(addOrderRequest());
  try {
    const { data } = await axios.patch(`/orders`, order);
    dispatch(addOrderSuccess(data.order));
  } catch (error) {
    dispatch(addOrderError(error.response.data.message));
  }
};

export const fetchOrders =
  ({ orderEmail = '', orderPhone = '' }) =>
  async dispatch => {
    dispatch(fetchOrdersRequest());
    try {
      const { data } = await axios.get(
        `/orders?page=1&limit=10&email=${orderEmail}&phone=${orderPhone}`,
      );
      console.log(data);
      dispatch(fetchOrdersSuccess(data.orders));
    } catch (error) {
      dispatch(fetchOrdersError(error.response.data.message));
    }
  };

export const fetchOrderById = orderId => async dispatch => {
  dispatch(fetchOrderByIdRequest());
  try {
    const { data } = await axios.get(`/orders/${orderId}`);
    dispatch(fetchOrderByIdSuccess(data.order));
  } catch (error) {
    dispatch(fetchOrderByIdError(error.response.data.message));
  }
};
