import { csrfFetch } from "./csrf";

const GET_GRINDERS = 'grinder/getGrinders';
const GET_ONE_GRINDER='grinder/getOneGrinder';

const getGrinders = payload => {
    return {
        type: GET_GRINDERS,
        payload,
    };
};


export const getAllGrinders = () => async dispatch => {
    const response = await fetch('/api/recipe');
    if(response.ok) {
        const data = await response.json();
        dispatch(getRecipes(data.recipes));
    }
}
