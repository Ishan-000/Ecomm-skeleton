import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { validateForm } from '../utils/validateForm';

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const { loading, error } = useSelector(state => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(login(formData.email, formData.password));
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input 
        type="email"
        name="email"
        value={formData.email} 
        onChange={handleChange} 
        className={`block w-full border p-2 mb-2 ${errors.email ? 'border-red-500' : ''}`}
        placeholder="Email"
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
      <input 
        type="password"
        name="password"
        value={formData.password} 
        onChange={handleChange} 
        className={`block w-full border p-2 mb-2 ${errors.password ? 'border-red-500' : ''}`}
        placeholder="Password"
      />
      {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default Login;