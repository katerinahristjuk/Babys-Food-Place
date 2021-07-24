import React, { useEffect } from 'react';
import '../assets/index.css';
import { likeRecipe } from '../actions/RecipeActions';
import {useDispatch} from 'react-redux'; //1 za akciite, a 2 za da mozeme da gi vidime promenlivite
// import { likeRecipe } from '../actions/RecipeCardActions';

// export function Recipe ({ recipe }) {
export function Recipe (props) {

    // const stars = useSelector(state=>state.RecipeCardReducer.stars);
    // const recipes = useSelector(state => state.RecipesReducer.recipes)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(likeRecipe());
    },[dispatch]);
    
    return(
        <div className="recipe">
            <div className='recipeImg'>
                <img width="100%" height='99%' src={props.picture} alt='recipe' />
                <div className='category'>{props.category}</div>
            </div>
            <div className='recipePart'>
            <h4>{props.title}</h4>
                <p>{props.shortDescription}</p>
            </div>
            <div className='recipeButtons'>
                <li><svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1.5em" 
                    height="1.5em" 
                    viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" 
                        fill="#626262"
                        /></svg>
                </li>
                <span>{props.prepTime}</span>
                <li>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1.5em" 
                height="1.5em" 
                viewBox="0 0 36 36">
                    <path fill="#E1E8ED" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18z"/>
                    <path fill="#CCD6DD" d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12z"/>
                    <path fill="#E1E8ED" d="M29 18c0 6.075-4.925 11-11 11c-6.076 0-11-4.925-11-11c0-6.076 4.925-11 11-11s11 4.924 11 11z"/>
                    <g fill="#99AAB5"><circle cx="1" cy="1" r="1"/><path d="M0 1h2v7H0z"/><circle cx="5" cy="1" r="1"/><path d="M4 1h2v7H4z"/>
                    <circle cx="9" cy="1" r="1"/>
                    <path d="M8 1h2v7H8zM3 14h4v20H3z"/>
                    <circle cx="5" cy="34" r="2"/>
                    <path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7H8z"/>
                    <circle cx="1" cy="8" r="1"/>
                    <circle cx="5" cy="8" r="1"/>
                    <circle cx="9" cy="8" r="1"/></g><g fill="#99AAB5">
                    <path d="M30 14h4v20h-4z"/><circle cx="32" cy="34" r="2"/>
                    <path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z"/></g></svg>
                </li>
                <span>{props.noPeople}</span>
                {/* <button onClick={()=>{dispatch(likeRecipe())}}>like</button> */}
                <button onClick={()=>dispatch(likeRecipe(props.id))}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1.2em" 
                    height="1.2em" 
                    viewBox="0 0 24 24">
                        <g fill="white">
                            <path d="M11.074 2.633c.32-.844 1.531-.844 1.852 0l2.07 5.734c.145.38.514.633.926.633h5.087c.94 0 1.35 1.17.611 1.743L18 14a.968.968 0 0 0-.322 1.092L19 20.695c.322.9-.72 1.673-1.508 1.119l-4.917-3.12a1 1 0 0 0-1.15 0l-4.917 3.12c-.787.554-1.83-.22-1.508-1.119l1.322-5.603A.968.968 0 0 0 6 14l-3.62-3.257C1.64 10.17 2.052 9 2.99 9h5.087a.989.989 0 0 0 .926-.633l2.07-5.734z" 
                            stroke="white" 
                            stroke-width="3" 
                            /></g></svg>
                </button>
                <span>{props.likeCount}</span>
                <button onClick={() => {props.selectRecipe({
                    id: props.id, 
                    title: props.title,
                    category: props.category,
                    shortDescription: props.shortDescription,
                    prepTime: props.prepTime,
                    noPeople: props.noPeople,
                    recipe: props.recipe,
                    creator: props.creator,
                    picture: props.picture,
                    likeCount: props.likeCount,
                    createdAt: props.createdAt
                    })}}>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="2em" 
                        height="2em" 
                        viewBox="0 0 24 24">
                            <path d="M10.296 7.71L14.621 12l-4.325 4.29l1.408 1.42L17.461 12l-5.757-5.71z" fill="white"/>
                            <path d="M6.704 6.29L5.296 7.71L9.621 12l-4.325 4.29l1.408 1.42L12.461 12z" fill="white"/></svg>
                    </button>
            </div>
        </div>
    )
}

// Lunch.propTypes={
//     title: PropTypes.string,
//     category: PropTypes.string,
//     shortDescription: PropTypes.string,
//     prepTime: PropTypes.string,
//     noPeople: PropTypes.string,
//     selectedRecipe: PropTypes.string,
//     openRecipe: PropTypes.func,
//     closeRecipe: PropTypes.func
// }