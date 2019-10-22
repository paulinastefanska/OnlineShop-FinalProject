import { createStore, combineReducers } from 'redux';

// import reducers
import products from './productRedux';

// combine reducers
const rootReducer = combineReducers({
  products,
});

// create store
const store = createStore(rootReducer);

export default store;