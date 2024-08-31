import axios from 'axios';

export const createOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: 'CREATE_ORDER_REQUEST' });
    const { data } = await axios.post('/api/v1/orders', orderData);
    dispatch({ type: 'CREATE_ORDER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CREATE_ORDER_FAIL', payload: error.response.data.message });
  }
};
