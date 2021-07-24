import React, { useEffect } from 'react';
import '../assets/index.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { getAllRecipes, deleteRecipe } from '../actions/RecipeActions';
import { Link } from 'react-router-dom';
// import { createRecipe } from '../api/recipes';
// import { RecipeCreateEdit } from './RecipeCreateEdit';



export function MyRecipes (props) {

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.RecipesReducer.recipes);
    // const [currentId, setCurrentId] = useState('');
    // const [selectedRecipe, setSelectedRecipe] = useState({
    //     _id: '', title: '', category: '', prepTime: '', shortDescription: '', recipe: '', creator:'', picture:'', likeCount:'', createdAt: ''
    // })
    // const delRecipes = useSelector(state => state.RecipesReducer.new);

    useEffect(() => { //the way where actually dispatch an action = inside useEffect
        dispatch(getAllRecipes());
        dispatch(deleteRecipe());
        // dispatch(getAllRecipes());
        // console.log(recipes);
    },[dispatch]);

    // function selectRecipe(recipe){
    //     setSelectedRecipe(recipe)
    //     console.log(`SelectedRecipe: ${selectedRecipe}`)
    // }


    // function closeRecipe(){
    //     setSelectedRecipe({_id: '', title: '', category: '', prepTime: '', shortDescription: '', recipe: '', creator:'', picture:'', likeCount:'', createdAt: ''})
    // }


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
                            <td>{recipe.createdAt}</td>
                            <td><button className='greenBtn' onClick={()=>dispatch(deleteRecipe(recipe._id))}>delete</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}