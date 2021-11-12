import {csrfFetch} from './csrf'
const GET_RECIPES ='recipe/getRecipes';
const ADD_ONE_RECIPE ='recipe/addOneRecipe';
const UPDATE_RECIPE ='recipe/updateRecipes';
const REMOVE_ONE_RECIPE ='recipe/removeOneRecipe';

const getRecipes = payload => {
    return {
        type: GET_RECIPES,
        payload,
    };
};

const addOneRecipe = payload => {
    return {
        type: ADD_ONE_RECIPE,
        payload,
    };
};

const changeRecipe = payload => {
    return {
        type: UPDATE_RECIPE,
        payload
    };
};

const removeOneRecipe = id => {
    return {
        type: REMOVE_ONE_RECIPE,
        payload: id,
    };
};

export const getAllRecipes = () => async dispatch => {
    const response = await fetch('/api/recipe');
    if(response.ok) {
        const data = await response.json();
        dispatch(getRecipes(data.recipes));
    }
}

export const addRecipe = recipe => async dispatch => {
    const response = await csrfFetch('/api/recipe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(recipe),
    });
    if(response.ok) {
        const data =await response.json();
        dispatch(addOneRecipe(data));
    }
};

export const modifyRecipe = (recipe) => async dispatch => {
    const response=await csrfFetch(`/api/recipe/${recipe.id}`, {
        method: 'PUT',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(recipe)
    })
    if (response.ok) {
        dispatch(changeRecipe(recipe))
    }
}
export const deleteRecipe = id => async dispatch => {
    const response = await csrfFetch(`/api/recipe/${id}`,{
        method: 'DELETE',
    });

    if(response.ok) {
        dispatch(removeOneRecipe(id));
    }
};

const recipeReducer = (state={}, action) => {
    let newState = {};
    switch (action.type){
        case GET_RECIPES:
        action.payload.forEach(recipe =>(newState[recipe.id]= recipe));
        return newState;
        case ADD_ONE_RECIPE:
            newState={...state,[action.id]:action};
            return newState;
        case UPDATE_RECIPE:
            newState={...state}
            newState[action.payload.id]=action.payload
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
