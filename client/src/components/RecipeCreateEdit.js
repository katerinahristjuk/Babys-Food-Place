import React, { useState, useEffect } from 'react';
import '../assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { createRecipe, updateRecipe } from '../actions/RecipeActions';
import { Link, useParams } from 'react-router-dom';
import FileBase from 'react-file-base64';


export function RecipeCreateEdit() {

    //ZA NEW:
    const [recipe, setRecipe] = useState({
        title: '',
        category: '',
        prepTime: '',
        noPeople: '',
        shortDescription: '',
        recipe: '',
        // creator: '',
        picture: '',
        likeCount: '',
        createdAt: new Date()
    });

    //ZA EDIT:    
    //baram id od req.params
    const { id } = useParams();

    //baram recept so soodvetnoto id
    const selectedR = useSelector(state => (id ? state.RecipesReducer.recipes.find(r => r._id === id) : null));

    //ako postoi id, settiraj recept
    useEffect(() => {
        if (selectedR) {
            setRecipe(selectedR);
        }
    }, [selectedR, id]);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!id) {
            dispatch(createRecipe(recipe))
            setRecipe({ title: '', category: '', prepTime: '', noPeople: '', shortDescription: '', recipe: '', picture: '' });
        } else {
            dispatch(updateRecipe(id, recipe))
            setRecipe({ title: '', category: '', prepTime: '', noPeople: '', shortDescription: '', recipe: '', picture: '' });
        }
    }


    return (
        <div className="recipeEdit">
            <div className='h2'>My Recipes
                {/* <button className='orangeBtn'><Link to='/:id/recipes' className='orangeBtnLink'>X</Link></button> */}
                <button className='orangeBtn'><Link to='/recipes' className='orangeBtnLink'>X</Link></button>
            </div><br />
            <div className="flexCol">
                <div className='flexRow'>
                    <p>Recipe Image</p>
                    <img src={recipe.picture} alt="recipe_picture"></img>
                    <div><FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setRecipe({ ...recipe, picture: base64 })} />
                    </div>
                    {/* <form>

                    </form> */}
                    {/* <img src={recipe.picture} alt='recipeImg'></img><br/>
                    <input type="file" className='greenBtn' accept="image/*" value={recipe.picture}/>
                    <button className='greenBtn' onClick={()=>{dispatch(uploadImg(recipe))}}>UPLOAD IMAGE</button> */}
                    <br />
                </div>
                <div>
                    <div className='flexRow'>
                        <p>Recipe Title</p>
                        <input
                            type='text'
                            placeholder='Recipe Title'
                            value={recipe.title}
                            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
                        ></input>
                    </div>
                    <div className='flexCol'>
                        <div>
                            <p>Recipe</p>
                            <input
                                list='category'
                                placeholder='Category'
                                value={recipe.category}
                                onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
                            ></input>
                            <datalist id='category'>
                                <option value='breakfast' />
                                <option value='brunch' />
                                <option value='lunch' />
                                <option value='dinner' />
                            </datalist>
                        </div>
                        <div>
                            <p>Prep. Time</p>
                            <input
                                type='text'
                                placeholder='45 min'
                                value={recipe.prepTime}
                                onChange={(e) => setRecipe({ ...recipe, prepTime: e.target.value })}
                            ></input>
                        </div>
                        <div>
                            <p>No. People</p>
                            <input
                                type='text'
                                placeholder='4'
                                value={recipe.noPeople}
                                onChange={(e) => setRecipe({ ...recipe, noPeople: e.target.value })}
                            ></input>
                        </div>
                    </div>
                    <div className='flexRow'>
                        <p>Short Description</p>
                        <textarea
                            placeholder='Write here short description of your recipe...'
                            value={recipe.shortDescription}
                            onChange={(e) => setRecipe({ ...recipe, shortDescription: e.target.value })}
                        ></textarea>
                        <br />
                        <button className='greenBtn' onClick={handleSubmit}>SAVE</button>
                    </div>
                </div>
                <div>
                    <p>Recipe</p>
                    <textarea
                        id='textareaBig'
                        placeholder='Write your recipe details here....'
                        value={recipe.recipe}
                        onChange={(e) => setRecipe({ ...recipe, recipe: e.target.value })}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}