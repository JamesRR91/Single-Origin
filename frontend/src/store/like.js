import { csrfFetch } from "./csrf";
const GET_LIKES='recipe/getLikes';

const getLikes = payload => {
    return {
        type: GET_LIKES,
        payload,
    };
};

export const getAllLikes = () => async dispatch => {
    const response = await fetch('/api/like');
    if(response.ok) {
        const data = await response.json();
        dispatch(getLikes(data.likes));
    }
}

const likeReducer = (state={}, action) => {
    let newState={};
    switch(action.type){
        case GET_LIKES:
        action.payload.forEach(like =>(newState[like.id]=like));
        return newState;
        default:
            return state;
    }
};

export default likeReducer;
