import axios from 'axios';
import { setAuthToken } from '../../utils/setAuthToken';
import api from '../../utils/api';

export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: 'LOGIN_REQUEST' });
      const { data } = await axios.post('http://localhost:5000/api/v1/login', { email, password });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
  };

export const register = (name, email, password) => async dispatch => {
    try {
      dispatch({ type: 'REGISTER_REQUEST' });
      const res = await api.post('/api/v1/register', { name, email, password });
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data
      });
    } catch (err) {
      console.log('Full error response:', err.response);
      console.log('Error data:', err.response.data);
      console.log('Validation errors:', err.response.data.errors);
      dispatch({
        type: 'REGISTER_FAIL',
        payload: err.response.data.errors ? err.response.data.errors[0].msg : 'An error occurred'
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthToken();
  dispatch({ type: 'LOGOUT' });
};