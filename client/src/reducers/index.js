import {combineReducers} from 'redux';
import RecipesReducer from './RecipesReducer';
import UsersReducer from './UsersReducer'

export default combineReducers({ RecipesReducer, UsersReducer });
