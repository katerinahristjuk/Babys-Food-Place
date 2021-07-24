// // <<< BackEnd Controller >>> //
// const likeRecipe = async (req, res) => {
//     const { id } = req.params;

//     try {
//         let recipe = await Recipe.findById(id);
//         let likedRecipe = await Recipe.findByIdAndUpdate(id, { likeCount: recipe.likeCount + 1 }, { new: true });

//         res.status(200).send({
//             error: false,
//             message: `You liked ${recipe.title} recipe.`,
//             likedRecipe
//         })
//     } catch (error) {
//         res.status(500).send(`Internal server error: ${error}`)
//     }
// }

// // <<< BackEnd Router >>> //
// router.patch('/:id/like', recipeController.likeRecipe);
//     // DO TUKA SE FUNKCIONIRA: 
//     // VO POSTMAN-OT SO SEKOJ PATCH-REQUEST LIKECOUNT SE ZGOLEMUVA NA +1

// // <<< FrontEnd Api >>> //
// export const likeRecipe = (id) => axios.patch(`${url}/${id}/like`);

// // <<< FrontEnd Actions >>> //
// export const likeRecipe = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.likeRecipe(id)
//         dispatch({
//             type: LIKE_RECIPE,
//             payload: data
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// // <<< FrontEnd Reducer >>> //
// const initialState = {
//     recipes: [],
//     new:[]
// }

// export default (state=initialState, action)=>{

//     switch(action.type){

//         case LIKE_RECIPE:
//             return{
//                 ...state,
//                 recipes: action.payload
//                 // recipes: state.recipes.map((recipe)=> recipe.id === action.payload.id? action.payload : state.recipes) 
                
//             }
//         default: return state;
//     }
// }

// // <<< FrontEnd Component >>> //
// // ova e child-component od home-page (karticka za sekoj recept posebno)
// import React, { useEffect } from 'react';
// import '../assets/index.css';
// import { likeRecipe } from '../actions/RecipeActions';
// import {useDispatch} from 'react-redux'; 

// export function Recipe (props) {

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(likeRecipe());
//     },[dispatch]);
    
//     return(
//         <div className="recipe">
//             <div className='recipePart'>
//                 <h4>{props.title}</h4>
//             </div>
//             <div className='recipeButtons'>
//                 <button onClick={()=>dispatch(likeRecipe(props.id))}>like</button>
//                 <span>{props.likeCount}</span>
//             </div>
//         </div>
//     )
// }