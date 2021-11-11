import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRecipes } from '../../store/recipes';
import RecipeDetail from '../RecipeDetail';
import CreateRecipeModal from '../CreateRecipeModal';

const RecipeList = () => {
    const dispatch = useDispatch();

    const recipes = useSelector(state => Object.values(state.recipe));

    useEffect(() => {
        dispatch(getAllRecipes());
    }, [dispatch]);
    return (
        <div className="recipe-list-container">
                {recipes.map(({id, title, brewtype, roasttype, grindlevel, description}) => (
                    <RecipeDetail id={id}
                        key={id}
                        title={title}
                        brewtype={brewtype}
                        roasttype={roasttype}
                        grindlevel={grindlevel}
                        description={description}
                    />
                ))}
                <CreateRecipeModal />
        </div>
    )
}

export default RecipeList;
