import React, { useEffect, useState } from 'react';
// import { FreshNew } from './FreshNew';
// import { Popular } from './Popular';
import { Recipe } from './Recipe';
import { useDispatch, useSelector } from 'react-redux'; //import hook from redux, that allows to dispatch an action;
import { freshNew, popular } from '../actions/RecipeActions';
import {RecipeView} from './RecipeView.js';

export function Home () {

    const dispatch = useDispatch();
    const recipesNew = useSelector(state => state.RecipesReducer.new);
    const recipesPopular = useSelector(state => state.RecipesReducer.recipes);
    const [selectedRecipe, setSelectedRecipe] = useState({
        _id: '', title: '', category: '', prepTime: '', shortDescription: '', recipe: '', creator:'', picture:'', likeCount:'', createdAt: ''
    })

    useEffect(() => {
        dispatch(popular());
        dispatch(freshNew());
    },[dispatch]);

    function selectRecipe(recipe){
        setSelectedRecipe(recipe)
        console.log(`SelectedRecipe: ${selectedRecipe}`)
    }

    function closeRecipe(){
        setSelectedRecipe({_id: '', title: '', category: '', prepTime: '', shortDescription: '', recipe: '', creator:'', picture:'', likeCount:'', createdAt: ''})
    }

    return(
        <div id="home">

            {/* SHOW THE POPUP */}
            {selectedRecipe._id === ""? null :
                <RecipeView
                id={selectedRecipe._id}
                title = {selectedRecipe.title}
                category = {selectedRecipe.category}
                shortDescription = {selectedRecipe.shortDescription}
                prepTime = {selectedRecipe.prepTime}
                noPeople = {selectedRecipe.noPeople}
                recipe = {selectedRecipe.recipe}
                picture = {selectedRecipe.picture}
                creator = {selectedRecipe.creator}
                likeCount = {selectedRecipe.likeCount}
                createdAt = {selectedRecipe.createdAt}
                closeRecipe = {closeRecipe}/>
            } 

            {/* FRESH-NEW RECIPES */}
            <div id="fresh-new">
            <div className='h2'>Fresh and New</div>
            {!recipesNew.length ? <h2>No recipes here yet...</h2> : 
                <div className='flex-container'>{recipesNew.map(recipe => {
                    return(
                        <div key={recipe._id}>
                            <Recipe 
                            id={recipe._id}
                            title = {recipe.title}
                            category = {recipe.category}
                            shortDescription = {recipe.shortDescription}
                            prepTime = {recipe.prepTime}
                            noPeople = {recipe.noPeople}
                            recipe = {recipe.recipe}
                            picture = {recipe.picture}
                            creator = {recipe.creator}
                            likeCount = {recipe.likeCount}
                            createdAt = {recipe.createdAt}
                            selectRecipe={selectRecipe}
                            />
                        </div>
                    )
                })}</div>
            }</div>


            {/* POPULAR RECIPES */}
            <div id="popular">
            <div className='h2'>Most Popular Recipes</div>
            {!recipesPopular.length ? <h2>{console.log(recipesPopular)}</h2> : 
                <div className='flex-container'>{recipesPopular.map(recipe => {
                    return(
                        <div key={recipe._id}>
                            <Recipe 
                            id={recipe._id}
                            title = {recipe.title}
                            category = {recipe.category}
                            shortDescription = {recipe.shortDescription}
                            prepTime = {recipe.prepTime}
                            noPeople = {recipe.noPeople}
                            recipe = {recipe.recipe}
                            picture = {recipe.picture}
                            creator = {recipe.creator}
                            likeCount = {recipe.likeCount}
                            createdAt = {recipe.createdAt}
                            selectRecipe={selectRecipe}
                            />
                        </div>
                    )
                })}</div>
            }
            {/* < FreshNew /> */}
            {/* < Popular /> */}
        </div>            
        </div>
    )
}