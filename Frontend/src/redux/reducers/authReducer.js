const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_REQUEST':
      case 'REGISTER_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          loading: false
        };
      case 'LOGIN_FAIL':
      case 'REGISTER_FAIL':
      case 'LOGOUT':
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          error: action.payload
        };
      default:
        return state;
    }
  }