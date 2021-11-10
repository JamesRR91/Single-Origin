import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRecipes } from '../../store/recipes';
import RecipeDetail from '../RecipeDetail';

const RecipeList = () => {
    const dispatch = useDispatch();

    const recipes = useSelector(state => Object.values(state.recipe));

    useEffect(() => {
        dispatch(getAllRecipes());
    }, [dispatch]);
    return (
        <div className="recipe-list-container">
                {recipes.map(({id, description}) => (
                    <RecipeDetail
                        key={id}
                        description={description}
                    />
                ))}
        </div>
    )
}

export default RecipeList;
