import React, { useEffect } from 'react';
import '../assets/index.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { getAllRecipes, deleteRecipe } from '../actions/RecipeActions';
import { Link } from 'react-router-dom';
import moment from 'moment';


export function MyRecipes (props) {

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.RecipesReducer.recipes);
 
    useEffect(() => { 
        dispatch(getAllRecipes());
        dispatch(deleteRecipe());
    },[dispatch]);


    return(
        <div id="myRecipes">
          
            <div className='h2'>My Recipes
                <button className='orangeBtn'><Link to='/recipes/new' className='orangeBtnLink'>+NEW</Link></button>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Recipe Name</th>
                    <th>Category</th>
                    <th>Created On</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {recipes.map(recipe=>{
                    return(
                        <tr key={recipe._id}>
                            <Link to={`/recipes/${recipe._id}`}>
                             <td >{recipe.title}</td>   
                            </Link>
                            <td><span className='categorySmall'>{recipe.category}</span></td>
                            <td>{moment(new Date(recipe.createdAt)).format("YYYY-MM-DD HH:mm")}</td>
                            <td><button className='greenBtn' onClick={()=>dispatch(deleteRecipe(recipe._id))}>delete</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}