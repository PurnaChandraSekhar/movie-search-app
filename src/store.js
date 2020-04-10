import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from './reducers';

const middleware = [thunk];
const intialState = {};

const store = createStore( combineReducers, intialState, composeWithDevTools(applyMiddleware(...middleware)) );

export default store;