import {csrfFetch} from './csrf'
import {GET_LIKES, ADD_LIKES, REMOVE_LIKES} from './like';
const GET_RECIPES ='recipe/getRecipes';
const ADD_ONE_RECIPE ='recipe/addOneRecipe';
const UPDATE_RECIPE ='recipe/updateRecipes';
const REMOVE_ONE_RECIPE ='recipe/removeOneRecipe';
const ADD_ONE_COMMENT ='comments/addOneComment';
const UPDATE_COMMENT ='comments/updateComment';
const REMOVE_ONE_COMMENT='comments/removeOneComment'
// const GET_LIKES='recipe/getLikes';

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

// const getLikes = payload => {
//     return {
//         type: GET_LIKES,
//         payload,
//     };
// };

export const getAllRecipes = () => async dispatch => {
    const response = await fetch('/api/recipe');
    if(response.ok) {
        const data = await response.json();
        dispatch(getRecipes(data.recipes));
    }
}

export const justOneRecipe =({recipeId}) => async (dispatch) => {
    const response = await csrfFetch(`/api/recipe/${recipeId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    });

    if (response.ok) {
        const recipe=await response.json();
        return recipe;
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

// export const getAllLikes = () => async dispatch => {
//     const response = await fetch('/api/like');
//     if(response.ok) {
//         const data = await response.json();
//         dispatch(getLikes(data.likes));
//     }
// }

const recipeReducer = (state={}, action) => {
    let newState = {};
    switch (action.type){
        case GET_RECIPES:
        action.payload.forEach(recipe =>(newState[recipe.id]= recipe));
        return newState;
        // case GET_ONE_RECIPE:
        //     const newState={...state};
        //     newState[action.payload.id]= action.payload;
        case ADD_ONE_RECIPE:
            newState={...state,[action.payload.id]:action.payload};
            return newState;
        case UPDATE_RECIPE:
            newState={...state}
            newState[action.payload.id]=action.payload
            console.log('KEY DAMMMIT',newState[action.payload.id].Comments)
            return newState;
        case REMOVE_ONE_RECIPE:
            newState={...state};
            delete newState[action.payload];
            return newState;
        case ADD_ONE_COMMENT:
            newState={...state};
            newState[action.payload.recipeid].Comments.push(action.payload);
            return newState;
        case UPDATE_COMMENT:
            newState={...state}
            const findBy=newState[action.payload.recipeid].Comments.findIndex(comment => comment.id === action.payload.id);
            newState[action.payload.recipeid].Comments[findBy]=action.payload;
            return newState;
        case REMOVE_ONE_COMMENT:
            newState={...state};
            newState[action.payload.id].Comments.splice(findBy, 1);
            return newState;
        default:
            return state;
    }
};
export default recipeReducer;
