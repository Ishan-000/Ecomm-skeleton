import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, searchProducts } from './redux/actions/productActions';
import { login, register, logout } from './redux/actions/authActions';
import { fetchCart, addToCart } from './redux/actions/cartActions';
import { createOrder } from './redux/actions/orderActions.js';
import { fetchProfile, updateProfile } from './redux/actions/profileActions';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import Checkout from './components/Checkout';
import ProtectedRoute from './components/ProtectedRoute';
import { setAuthToken } from './utils/setAuthToken';
import Notification from './components/Notification';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
// App Component
const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Notification />
        <main className="container mx-auto px-4 py-8">
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;