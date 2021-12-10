import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getAllRecipes } from '../../store/recipes';

import RecipeDetail from '../RecipeDetail';
import CreateRecipeModal from '../CreateRecipeModal';

const RecipeList = () => {
    const dispatch = useDispatch();

    const recipes = useSelector(state => Object.values(state.recipe));
    const likes = useSelector(state => Object.values(state.like))
    useEffect(() => {
        dispatch(getAllRecipes());
    }, [dispatch]);
    
    return (
        <div className="recipe-list-container">
        <div className="create-button">
        <CreateRecipeModal />
        </div>
        <div className='recipe-list-single'>
                {recipes.length>0 ? recipes.map(({id, title, brewtype, roasttype, grindlevel, coffeedose, waterdose, brewtime, description}) => (
                    <RecipeDetail id={id}
                        key={id}
                        title={title}
                        brewtype={brewtype}
                        roasttype={roasttype}
                        grindlevel={grindlevel}
                        coffeedose={coffeedose}
                        waterdose={waterdose}
                        brewtime={brewtime}
                        description={description}
                    />
                )):null}
                </div>
        </div>
    )
}

export default RecipeList;
