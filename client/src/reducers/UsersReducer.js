/* eslint-disable import/no-anonymous-default-export */
import {FETCH_USERS, REGISTER, LOGIN, UPDATE_USER, SHOW_USER, DELETE_USER } from '../constants/UserConstatns';

const initialState = {
    users: [],
    token: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            return {
                users: action.payload.user,
                token: action.payload.token
            }

        case REGISTER:
            return { users: [...state, action.payload]}

        case FETCH_USERS:
            return { users: action.payload }

        case SHOW_USER:
            return { users: action.payload }

        case UPDATE_USER:
            return { users: [...state, action.payload]}

        case DELETE_USER:
            return {users: state.users.filter( user => user._id !== action.payload._id)}

        default: return state;
    }
} 