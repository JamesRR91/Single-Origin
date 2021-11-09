import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRecipes } from '../../store/recipes';

const RecipeList = () => {
    const dispatch = useDispatch();

    const recipes = useSelector(state => Object.values(state.recipe));

    useEffect(() => {
        dispatch(getAllRecipes());
    }, [dispatch]);
    return (
        <div className="recipe-list-container">
                {recipes.map(({id, userid, grinderid, brewtype, roasttype,grindlevel,description}) => (
                    <p>key={id},
                        grinderid={grinderid},
                        brewtype={brewtype},
                        roasttype={roasttype},
                        grindlevel={grindlevel},
                        description={description}
                    </p>
                ))}
        </div>
    )
}

export default RecipeList;
