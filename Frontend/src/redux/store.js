import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';
import profileReducer from './reducers/profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
  profile: profileReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;