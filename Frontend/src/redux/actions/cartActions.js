import axios from 'axios';

export const fetchCart = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_CART_REQUEST' });
    const { data } = await axios.get('/api/v1/cart');
    dispatch({ type: 'FETCH_CART_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_CART_FAIL', payload: error.response.data.message });
  }
};

export const addToCart = (productId) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_TO_CART_REQUEST' });
    const { data } = await axios.post('/api/v1/cart', { productId });
    dispatch({ type: 'ADD_TO_CART_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_TO_CART_FAIL', payload: error.response.data.message });
  }
};

export const removeFromCart = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: 'REMOVE_FROM_CART_REQUEST' });
    await axios.delete(`/api/v1/cart/${itemId}`);
    dispatch({ type: 'REMOVE_FROM_CART_SUCCESS', payload: itemId });
  } catch (error) {
    dispatch({ type: 'REMOVE_FROM_CART_FAIL', payload: error.response.data.message });
  }
};

export const updateQuantity = (itemId, quantity) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_QUANTITY_REQUEST' });
    const { data } = await axios.put(`/api/v1/cart/${itemId}`, { quantity });
    dispatch({ type: 'UPDATE_QUANTITY_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'UPDATE_QUANTITY_FAIL', payload: error.response.data.message });
  }
};