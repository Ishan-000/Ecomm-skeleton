const initialState = {
  orders: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_ORDER_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'CREATE_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        orders: [...state.orders, action.payload]
      };
    case 'CREATE_ORDER_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
