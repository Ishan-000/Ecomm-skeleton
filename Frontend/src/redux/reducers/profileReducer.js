const initialState = {
  profile: null,
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROFILE_REQUEST':
    case 'UPDATE_PROFILE_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_PROFILE_SUCCESS':
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case 'FETCH_PROFILE_FAIL':
    case 'UPDATE_PROFILE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
