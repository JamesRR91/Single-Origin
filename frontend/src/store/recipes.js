const ADD_RECIPES ='recipe/addRecipes';
const ADD_ONE_RECIPE ='recipe/addOneRecipe';
const REMOVE_ONE_RECIPE ='recipe/removeOneRecipe';

const addRecipes = payload => {
    return {
        type: ADD_RECIPES,
        payload,
    };
};

const addOneRecipe = payload => {
    return {
        type: ADD_ONE_RECIPE,
        payload,
    };
};

const removeOneRecipe = payload => {
    return {
        type: REMOVE_ONE_RECIPE,
        payload: id,
    };
};

export const getAllRecipes = () => async dispatch => {
    const response = await fetch('/api/recipe');
    if(response.ok) {
        const data = await response.json();
        dispatch(addRecipes(data.recipes));
    }
}

export const addRecipe = recipe => async dispatch => {
    const response = await fetch('/api/recipe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(recipe),
    });
    if(response.ok) {
        const data =await response.json();
        dispatch(addOneRecipe(data.recipe));
    }
};

export const deleteRecipe = id => async dispatch => {
    const response = await fetch(`/api/recipe/${id}`,{
        method: 'DELETE',
    });

    if(response.ok) {
        dispatch(removeOneRecipe(id));
    }
};

const recipeReducer = (state={}, action) => {
    let newState = {};
    switch (action.type){
        case ADD_RECIPES:
        action.payload.forEach(recipe =>(newState[recipe.id]= recipe.id));
        return newState;
        case ADD_ONE_RECIPE:
            newState={...state,[action.payload.id]:action.payload};
            return newState;
        case REMOVE_ONE_RECIPE:
            newState={...state};
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};
export default recipeReducer;
