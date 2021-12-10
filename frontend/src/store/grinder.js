import { csrfFetch } from "./csrf";

const GET_GRINDERS ='grinder/getGrinders';
const GET_ONE_GRINDER='grinder/getOneGrinder';

const getGrinders = payload => {
    return {
        type: GET_GRINDERS,
        payload
    };
};

const getOneGrinder = (grinder) => {
    return {
        type:GET_ONE_GRINDER,
        grinder
    }
}


export const getAllGrinders = () => async dispatch => {
    const response = await fetch('/api/grinder');
    if(response.ok) {
        const data = await response.json();
        dispatch(getGrinders(data.grinders));
    }
}

export const loadOneGrinder = (id) => async(dispatch) => {
    const response=await csrfFetch(`/api/grinder/${id}`)
    if(response.ok) {
        const grinder=await response.json();
        dispatch(getOneGrinder(grinder))
    }
}



const grinderReducer = (state={}, action) => {
    let newState={}
    switch(action.type) {
        case GET_GRINDERS:
            action.payload.forEach(grinder => (newState[grinder.id]=grinder));
            return newState;
        case GET_ONE_GRINDER:
            newState={...state}
            newState[action.grinder.id]=action.grinder
            return newState
        default:
            return state;
    }
}

export default grinderReducer;
