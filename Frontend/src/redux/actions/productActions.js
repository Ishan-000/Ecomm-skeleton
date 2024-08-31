import axios from 'axios';

export const fetchProducts = (page = 1) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
    const { data } = await axios.get(`/api/v1/products?page=${page}`);
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAIL', payload: error.response.data.message });
  }
};

export const searchProducts = (searchTerm) => async (dispatch) => {
  try {
    dispatch({ type: 'SEARCH_PRODUCTS_REQUEST' });
    const { data } = await axios.get(`/api/v1/products/search?term=${searchTerm}`);
    dispatch({ type: 'SEARCH_PRODUCTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'SEARCH_PRODUCTS_FAIL', payload: error.response.data.message });
  }
};

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_PRODUCT_DETAILS_REQUEST' });
    const { data } = await axios.get(`/api/v1/products/${id}`);
    dispatch({ type: 'FETCH_PRODUCT_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCT_DETAILS_FAIL', payload: error.response.data.message });
  }
};