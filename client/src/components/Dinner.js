import React, { useEffect, useState } from 'react';
import { Recipe } from './Recipe';
import '../assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { dinner } from '../actions/RecipeActions';
import { RecipeView } from './RecipeView';


export function Dinner () {

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.RecipesReducer.recipes);
    const [selectedRecipe, setSelectedRecipe] = useState({
        _id: '', title: '', category: '', prepTime: '', shortDescription: '', recipe: '', creator:'', picture:'', likeCount:'', createdAt: ''
    })

    useEffect(() => {
        dispatch(dinner());
    },[dispatch]);

    function selectRecipe(recipe){
        setSelectedRecipe(recipe)
        console.log(`SelectedRecipe: ${selectedRecipe}`)
    }


    function closeRecipe(){
        setSelectedRecipe({_id: '', title: '', category: '', prepTime: '', shortDescription: '', recipe: '', creator:'', picture:'', likeCount:'', createdAt: ''})
    }

    return(
        <div id="dinner">
            <div className='h2'>Dinner</div>

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

            {!recipes.length ? <h2>No recipes here yet...</h2> : 
                <div className='flex-container'>{recipes.map(recipe => {
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
        </div>
    )
}