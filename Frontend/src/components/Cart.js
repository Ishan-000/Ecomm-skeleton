import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, removeFromCart, updateQuantity } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity(itemId, quantity));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
    {!Array.isArray(items) || items.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-2">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>Price: ${item.price}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 border rounded px-2 py-1"
              />
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">Remove</button>
          </div>
        ))}
        <div className="mt-4">
          <p className="font-bold">Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded mt-2 inline-block">Proceed to Checkout</Link>
        </div>
      </>
    )}
  </div>
);
};

export default Cart;