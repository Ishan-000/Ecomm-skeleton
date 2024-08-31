const initialState = {
    products: [],
    productDetails: null,
    loading: false,
    error: null,
    page: 1,
    totalPages: 1
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_PRODUCTS_REQUEST':
      case 'SEARCH_PRODUCTS_REQUEST':
      case 'FETCH_PRODUCT_DETAILS_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_PRODUCTS_SUCCESS':
      case 'SEARCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          loading: false,
          products: action.payload.products,
          page: action.payload.page,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages
        };
      case 'FETCH_PRODUCT_DETAILS_SUCCESS':
        return {
          ...state,
          loading: false,
          productDetails: action.payload
        };
      case 'FETCH_PRODUCTS_FAIL':
      case 'SEARCH_PRODUCTS_FAIL':
      case 'FETCH_PRODUCT_DETAILS_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }