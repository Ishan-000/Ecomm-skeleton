import axios from 'axios';

export const fetchProfile = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_PROFILE_REQUEST' });
    const { data } = await axios.get('http://localhost:5000/api/v1/profile');
    dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_PROFILE_FAIL', payload: error.response.data.message });
  }
};

export const updateProfile = (profileData) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_PROFILE_REQUEST' });
    const { data } = await axios.put('http://localhost:5000/api/v1/profile', profileData);
    dispatch({ type: 'UPDATE_PROFILE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'UPDATE_PROFILE_FAIL', payload: error.response.data.message });
  }
};