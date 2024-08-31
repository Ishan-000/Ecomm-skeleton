
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Notification = () => {
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  if (!notification) return null;

  return (
    <div className={`fixed top-0 right-0 m-4 p-4 rounded ${notification.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
      {notification.message}
      <button onClick={() => dispatch({ type: 'CLEAR_NOTIFICATION' })} className="ml-2">×</button>
    </div>
  );
};

export default Notification;