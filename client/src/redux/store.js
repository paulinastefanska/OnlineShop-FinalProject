import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import products from './productRedux';

// combine reducers
const rootReducer = combineReducers({
  products,
});

// create store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;