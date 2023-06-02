import {
  fetchShopsRequest,
  fetchShopsSuccess,
  fetchShopsError,
} from './shops-actions';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000/api';
// axios.defaults.baseURL = 'https://server-production.up.railway.app/api';

export const fetchShops = () => async dispatch => {
  dispatch(fetchShopsRequest());
  try {
    const { data } = await axios.get(
      `/shops`,
    );
    dispatch(fetchShopsSuccess(data.shops));
  } catch (error) {
    dispatch(fetchShopsError(error.response.data.message));
  }
};
