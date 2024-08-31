const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_CART_REQUEST':
      case 'ADD_TO_CART_REQUEST':
      case 'REMOVE_FROM_CART_REQUEST':
      case 'UPDATE_QUANTITY_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_CART_SUCCESS':
        return {
          ...state,
          loading: false,
          items: Array.isArray(action.payload) ? action.payload : []
        };
      case 'ADD_TO_CART_SUCCESS':
        return {
          ...state,
          loading: false,
          items: [...state.items, action.payload]
        };
      case 'REMOVE_FROM_CART_SUCCESS':
        return {
          ...state,
          loading: false,
          items: state.items.filter(item => item.id !== action.payload)
        };
      case 'UPDATE_QUANTITY_SUCCESS':
        return {
          ...state,
          loading: false,
          items: state.items.map(item => 
            item.id === action.payload.id ? action.payload : item
          )
        };
      case 'FETCH_CART_FAIL':
      case 'ADD_TO_CART_FAIL':
      case 'REMOVE_FROM_CART_FAIL':
      case 'UPDATE_QUANTITY_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }