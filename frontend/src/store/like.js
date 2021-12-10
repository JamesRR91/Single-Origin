import { csrfFetch } from "./csrf";
const GET_LIKES='like/getLikes';
const ADD_LIKES='like/getLikes';
const REMOVE_LIKES='like/removeLikes';

const getLikes = payload => {
    return {
        type: GET_LIKES,
        payload,
    };
};

const addLikes = payload => {
    return {
        type: ADD_LIKES,
        payload,
    }
}

const removeLikes=id => {
    return {
        type: REMOVE_LIKES,
        id
    }
}

export const getAllLikes = () => async dispatch => {
    const response = await fetch('/api/like');
    if(response.ok) {
        const data = await response.json();
        dispatch(getLikes(data.likes));
    }
}

export const makeLikes = like => async dispatch => {
    const response = await csrfFetch('/api/like', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(like),
    });
    if(response.ok) {
        const data=await response.json();
        dispatch(addLikes(data));
    }
}

export const deleteLikes = id => async dispatch => {
    const response = await csrfFetch(`/api/likes/${id}`,{
        method: 'DELETE',
    });

    if(response.ok) {
        dispatch(removeLikes(id));
    }
}

const likeReducer = (state={}, action) => {
    let newState={};
    switch(action.type){
        case GET_LIKES:
            action.payload.forEach(like =>(newState[like.id]=like));
            return newState;
        case ADD_LIKES:
            newState={...state,[action.payload.id]:action.payload};
            console.log('LIKES', action.payload);
            return newState;
        case REMOVE_LIKES:
            newState={...state};
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};

export default likeReducer;
