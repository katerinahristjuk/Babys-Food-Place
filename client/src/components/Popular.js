import React, {useEffect} from 'react';
import { Recipe } from './Recipe';
import '../assets/index.css';
import { useDispatch, useSelector } from 'react-redux'; //import hook from redux, that allows to dispatch an action;
// import { freshNew } from '../actions/RecipeActions';
import { popular } from '../actions/RecipeActions';

export function Popular () {

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.RecipesReducer.recipes);

    useEffect(() => {
        dispatch(popular());
        // dispatch(freshNew());
        console.log(popular())
    },[dispatch]);

    return(
        <div id="popular">
            <div className='h2'>Most Popular Recipes</div>

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

            {/* <div className='flex-container'>
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
            <div className='flex-container'>
                <Recipe/>
                <Recipe/>
                <Recipe/>
            </div> */}
        </div>
    )
}