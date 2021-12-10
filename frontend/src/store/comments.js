import {csrfFetch} from './csrf'
const GET_COMMENTS ='comments/getComments';
const ADD_ONE_COMMENT ='comments/addOneComment';
const UPDATE_COMMENT ='comments/updateComment';
const REMOVE_ONE_COMMENT ='comments/removeOneComment';

const getComments = payload => {
    return {
        type: GET_COMMENTS,
        payload
    };
};

const addOneComment = payload => {
    return {
        type: ADD_ONE_COMMENT,
        payload,
    };
};

const changeComment = payload => {
    return {
        type: UPDATE_COMMENT,
        payload
    };
};

const removeOneComment = payload => {
    return {
        type: REMOVE_ONE_COMMENT,
        payload
    };
};

export const getAllComments = () => async dispatch => {
    const response = await fetch('/api/comments');
    if(response.ok) {
        const data = await response.json();
        dispatch(getComments(data.comments));
    }
}

export const addComment = comment => async dispatch => {
    const response = await csrfFetch('/api/comments', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(comment),
    });
    if(response.ok) {
        const data =await response.json();
        dispatch(addOneComment(data.newComment));
    }
};

export const modifyComment = (comment) => async dispatch => {
    const response=await csrfFetch(`/api/comments/${comment.id}`, {
        method: 'PUT',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(comment)
    })
    if (response.ok) {
        dispatch(changeComment(comment))
    }
}
export const deleteComment = id => async dispatch => {
    const response = await csrfFetch(`/api/comments/${id}`,{
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
        action.payload.forEach(comment =>(newState[comment.id]= comment));
        return newState;
        case ADD_ONE_COMMENT:
            newState={...state,[action.id]:action};
            return newState;
        case UPDATE_COMMENT:
            newState={...state}
            newState[action.payload.id]=action.payload
            return newState;
        case REMOVE_ONE_COMMENT:
            newState={...state};
            console.log('EXTERMINATE',newState[action.payload.id])
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};
export default commentReducer;
