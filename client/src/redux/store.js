import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import products from './productRedux';

// combine reducers
const rootReducer = combineReducers({
  products,
});

// create store
const store = createStore(
	rootReducer, 
	compose(
		applyMiddleware(thunk)
	)
);

export default store;