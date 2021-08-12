import axios from 'axios';
import {URL} from '../constants/UserConstatns';

export const getUsers = () => axios.get(`${URL}/users`);
export const register = (newUser) => axios.post(`${URL}/register`, newUser);
export const login = (user) => axios.post(`${URL}/login`, user);
export const showOneUser = (userId) => axios.get(`${URL}/${userId}/myProfile`);
export const updateUser = (userId, updatedUser) => axios.patch(`${URL}/${userId}/myProfile`, updatedUser);
export const deleteUser = (userId) => axios.delete(`${URL}/users/${userId}`);