import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index';

const middleware = applyMiddleware(thunk, createLogger()); //fiskalna

export default createStore(combineReducers, middleware);