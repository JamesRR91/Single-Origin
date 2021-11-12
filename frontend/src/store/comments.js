import {csrfFetch} from './csrf'
const GET_Comments ='recipe/getComments';
const ADD_ONE_Comment ='Comment/addOneComment';
const UPDATE_Comment ='Comment/updateComments';
const REMOVE_ONE_Comment ='Comment/removeOneComment';

const getComments = payload => {
    return {
        type: GET_Comments,
        payload,
    };
};

const addOneComment = payload => {
    return {
        type: ADD_ONE_Comment,
        payload,
    };
};

const changeComment = payload => {
    return {
        type: UPDATE_Comment,
        payload
    };
};

const removeOneComment = id => {
    return {
        type: REMOVE_ONE_Comment,
        payload: id,
    };
};

export const getAllComments = () => async dispatch => {
    const response = await fetch('/api/recipe');
    if(response.ok) {
        const data = await response.json();
        dispatch(getComments(data.Comments));
    }
}

export const addComment = comment => async dispatch => {
    const response = await csrfFetch('/api/recipe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(comment),
    });
    if(response.ok) {
        const data =await response.json();
        dispatch(addOneRecipe(data.comment));
    }
};

export const modifyRecipe = (comment) => async dispatch => {
    const response=await csrfFetch(`/api/recipe/${comment.id}`, {
        method: 'PUT',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(comment)
    })
    if (response.ok) {
        dispatch(changeComment(comment))
    }
}
export const deleteComment = id => async dispatch => {
    const response = await csrfFetch(`/api/recipe/${id}`,{
        method: 'DELETE',
    });

    if(response.ok) {
        dispatch(removeOneComment(id));
    }
};

const commentReducer = (state={}, action) => {
    let newState = {};
    switch (action.type){
        case GET_COMMENTS:
        action.payload.forEach(comment =>(newState[recipe.id]= recipe));
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
