import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from '../redux/actions/profileActions';


const UserProfile = () => {
    const dispatch = useDispatch();
    const { profile, loading, error } = useSelector(state => state.profile);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
  
    useEffect(() => {
      dispatch(fetchProfile());
    }, [dispatch]);
  
    useEffect(() => {
      if (profile) {
        setName(profile.name || '');
        setAddress(profile.address || '');
      }
    }, [profile]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateProfile({ name, address }));
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
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          className="block w-full border p-2 mb-2"
          placeholder="Address"
        />
        <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded">Update Profile</button>
      </form>
    );
  };
  export default UserProfile;