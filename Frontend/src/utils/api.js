import axios from 'axios';
// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';


const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});


export const getProducts = (params) => api.get('/products', { params });
export const addToCart = (productId, quantity) => api.post('/cart', { productId, quantity });
export const getCart = () => api.get('/cart');
export const createOrder = (orderData) => api.post('/orders', orderData);
export const getUserProfile = () => api.get('/user-profile');
export const updateUserProfile = (userData) => api.put('/user-profile', userData);
export default api;