import {csrfFetch} from './csrf'
const GET_REVIEWS ='review/getReviews';
const ADD_ONE_REVIEW ='review/addOneReview';
const UPDATE_REVIEW ='review/updateReview';
const REMOVE_ONE_REVIEW ='review/removeOneReview';

const getReviews = payload => {
    return {
        type: GET_REVIEWS,
        payload
    };
};

const addOneReview = payload => {
    return {
        type:ADD_ONE_REVIEW,
        payload,
    };
};

const changeReview = payload => {
    return {
        type: UPDATE_REVIEW,
        payload
    };
};

const removeOneReview = review => {
    return {
        type:REMOVE_ONE_REVIEW,
        review
    };
};

export const getAllReviews = () => async dispatch => {
    const response = await fetch('/api/review');
    if (response.ok) {
        const data = await response.json();
        dispatch(getReviews(data.reviews));
    }
}

export const addReview = review => async dispatch => {
    const response = await csrfFetch('/api/review', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review),
    });
    if(response.ok) {
        const data=await response.json();
        dispatch(addOneReview(data.newReview));
    }
}

export const modifyReview = (review) => async dispatch => {
    const response=await csrfFetch(`/api/review/${review.id}`, {
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(review)
    })
    if(response.ok) {
        dispatch(changeReview(review))
    }
}

export const deleteReview = id => async dispatch => {
    const response = await csrfFetch(`api/review/${id}`, {
        method:'DELETE',
    });

const removedReview=await response.json();
if(response.ok) {
    dispatch(removeOneReview(removedReview));
}
}

const reviewReducer = (state={}, action) => {
    let newState = {};
    switch(action.type){
        case GET_REVIEWS:
            action.payload.forEach(review =>(newState[review.id]=review));
            return newState;
        case ADD_ONE_REVIEW:
            newState={...state,[action.id]:action};
            return newState;
        case UPDATE_REVIEW:
            newState={...state};
            newState[action.payload.id]=action.payload
            return newState;
        case REMOVE_ONE_REVIEW:
            newState={...state};
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;
