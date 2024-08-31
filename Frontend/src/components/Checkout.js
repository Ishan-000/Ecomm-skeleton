import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../redux/actions/cartActions';
import { createOrder } from '../redux/actions/orderActions';

// Checkout Component
const Checkout = () => {
    const dispatch = useDispatch();
    const { cart, loading, error } = useSelector(state => state.cart);
    const [shippingAddress, setShippingAddress] = useState('');
  
    useEffect(() => {
      dispatch(fetchCart());
    }, [dispatch]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createOrder({ shippingAddress }));
    };
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        {cart && cart.items.map(item => (
          <div key={item._id} className="border-b py-2">
            <p>{item.productId.name} - Quantity: {item.quantity}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="mt-4">
          <input 
            type="text" 
            value={shippingAddress} 
            onChange={(e) => setShippingAddress(e.target.value)} 
            className="block w-full border p-2 mb-2"
            placeholder="Shipping Address"
          />
          <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded">Place Order</button>
        </form>
      </div>
    );
  };
  
export default Checkout;
  