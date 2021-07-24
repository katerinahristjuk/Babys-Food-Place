import React, {useEffect} from 'react';
import '../assets/index.css';
import { Recipe } from './Recipe'
import { useDispatch, useSelector } from 'react-redux'; //import hook from redux, that allows to dispatch an action;
import { freshNew } from '../actions/RecipeActions';

export function FreshNew () {

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.RecipesReducer.recipes);

    useEffect(() => {
        dispatch(freshNew());
        console.log(freshNew())
        // dispatch(getAllRecipes());
    },[dispatch]);

    return(
        <div id="fresh-new">
            <div className='h2'>Fresh and New</div>

            {!recipes.length ? <h2>No recipes here yet...</h2> : 
                <div className='flex-container'>{recipes.map(recipe => {
                    return(
                        <div key={recipe._id}>
                            {recipe.title}
                            <Recipe 
                            title = {recipe.title}
                            category = {recipe.category}
                            shortDescription = {recipe.shortDescription}
                            prepTime = {recipe.prepTime}
                            noPeople = {recipe.noPeople}
                            />
                        </div>
                    )
                })}</div>
            }
        </div>
    )
}