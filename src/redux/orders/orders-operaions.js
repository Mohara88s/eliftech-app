import {
  addOrderRequest,
  addOrderSuccess,
  addOrderError,
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersError,
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

export const fetchOrders = () => async dispatch => {
  dispatch(fetchOrdersRequest());
  try {
    const { data } = await axios.get(
      `/orders`,
    );
    dispatch(fetchOrdersSuccess(data.shops));
  } catch (error) {
    dispatch(fetchOrdersError(error.response.data.message));
  }
};
