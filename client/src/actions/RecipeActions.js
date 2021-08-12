import * as api from '../api/recipes';
import { GET_ALL_RECIPES, SHOW_ONE_RECIPE, 
    CREATE_RECIPE, UPLOAD_IMG, UPDATE_RECIPE, DELETE_RECIPE, LIKE_RECIPE,
    BREAKFAST, BRUNCH, LUNCH, DINNER, FRESH_NEW, POPULAR,  } from '../constants/RecipeConstants';



export const getAllRecipes = () => async (dispatch) => {
    try {
        const { data } = await api.getRecipes();

        dispatch({
            type: GET_ALL_RECIPES,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }  
};

export const showOneRecipe = (id, recipe) => async (dispatch) => {
    try {
        const { data } = await api.fetchOneRecipe(id, recipe);

        dispatch({
            type: SHOW_ONE_RECIPE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const createRecipe = (recipe) => async (dispatch) => {
    try {
        const { data } = await api.createRecipe(recipe);

        dispatch({
            type: CREATE_RECIPE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};
     
export const updateRecipe = (id, recipe) => async (dispatch) => {
    try {
        const { data } = await api.updateRecipe(id, recipe);

        dispatch({
            type: UPDATE_RECIPE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}
    
export const likeRecipe = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeRecipe(id);

        dispatch({
            type: LIKE_RECIPE,
            payload: data.likedRecipe
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteRecipe = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleteRecipe(id);

         dispatch({
            type: DELETE_RECIPE,
            payload: data.deletedRecipe
        }) 
    } catch (error) {
        console.log(error);
    }
}

export const breakfast = () => async (dispatch) => {
    try {
        const { data } = await api.breakfast();

        dispatch({
            type: BREAKFAST,
            payload: data.breakfast
        });
    } catch (error) {
        console.log(error);
    }  
}

export const brunch = () => async (dispatch) => {
    try {
        const { data } = await api.brunch();

        dispatch({
            type: BRUNCH,
            payload: data.brunch
        });
    } catch (error) {
        console.log(error);
    }  
}

export const lunch = () => async (dispatch) => {
    try {
        const { data } = await api.lunch();

        dispatch({
            type: LUNCH,
            payload: data.lunch
        });
    } catch (error) {
        console.log(error);
    }  
}

export const dinner = () => async (dispatch) => {
    try {
        const { data } = await api.dinner();

        dispatch({
            type: DINNER,
            payload: data.dinner
        });
    } catch (error) {
        console.log(error);
    }  
}

export const freshNew = () => async (dispatch) => {
    try {
        const { data } = await api.freshNew();

        dispatch({
            type: FRESH_NEW,
            payload: data.freshNew
        });
    } catch (error) {
        console.log(error);
    }  
}

export const popular = () => async (dispatch) => {
    try {
        const { data } = await api.popular();

        dispatch({
            type: POPULAR,
            payload: data.mostPopular
        });
    } catch (error) {
        console.log(error);
    }  
}

export const uploadImg = (recipe) => async (dispatch) => {
    try {
        const { data } = await api.uploadImg(recipe);

        dispatch({
            type: UPLOAD_IMG,
            payload: data.img
        })
    } catch (error) {
        console.log(error);
    }
}

