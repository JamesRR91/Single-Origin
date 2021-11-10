import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                {recipes.map(({id, title, brewtype, roasttype, grindlevel, description}) => (
                    <RecipeDetail
                        key={id}
                        title={title}
                        brewtype={brewtype}
                        roasttype={roasttype}
                        grindlevel={grindlevel}
                        description={description}
                    />
                ))}
                <Link to='recipe/add'><button>Make Your Own Recipe</button></Link>
        </div>
    )
}

export default RecipeList;
