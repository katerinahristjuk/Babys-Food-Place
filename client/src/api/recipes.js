import axios from 'axios';
import {URL} from '../constants/RecipeConstants';

export const getRecipes = () => axios.get(`${URL}/`);
export const createRecipe = (newRecipe) => axios.post(`${URL}/new`, newRecipe);
export const uploadImg = () => axios.post(`${URL}/new/img`);
export const likeRecipe = (id) => axios.patch(`${URL}/${id}/like`);
export const updateRecipe = (id, updatedRecipe) => axios.patch(`${URL}/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${URL}/${id}`);
export const fetchOneRecipe = (id) => axios.get(`${URL}/${id}`);
export const breakfast = () => axios.get(`${URL}/breakfast`);
export const brunch = () => axios.get(`${URL}/brunch`);
export const lunch = () => axios.get(`${URL}/lunch`);
export const dinner = () => axios.get(`${URL}/dinner`);
export const freshNew = () => axios.get(`${URL}/freshNew`);
export const popular = () => axios.get(`${URL}/popular`);
