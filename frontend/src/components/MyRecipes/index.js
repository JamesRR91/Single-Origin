import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllRecipes } from "../../store/recipes";
import { getAllComments } from "../../store/comments";
import { Link } from 'react-router-dom';

export default function MyRecipe() {
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(getAllRecipes())
    }, []);

    useEffect (() => {
        dispatch(getAllComments())
    }, []);

    const recipes= useSelector(state => state.recipes);
    const recipeArray=Object.values(recipes);

    const comments= useSelector(state => state.comments);
    const commentsArray= Object.values(comments);

    return (
        <h3>My Recipes</h3>
        <ul>
        {recipeArray?.map((recipe => {
            <div className='recipe-profile-individual'>
            <li>
            title={recipe.title}
            </li>
            <li>
            brewtype={recipe.brewtype}
            </li>
            </div>
        }))}
        </ul>
    )
}
