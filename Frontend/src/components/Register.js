import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/authActions';

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector(state => state.auth);
     

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(register(name, email, password));
    };
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="block w-full border p-2 mb-2"
          placeholder="Name"
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="block w-full border p-2 mb-2"
          placeholder="Email"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="block w-full border p-2 mb-2"
          placeholder="Password"
        />
        <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    );
  };

export default Register;