import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addComment } from '../../store/comments';

const CreateComment = ({id, setShowModal}) => {
    const sessionUser = useSelector((state) =>state.session.user)
    const recipes = useSelector((state) => Object.values(state.recipe))
    const specificRecipe=recipes.find(recipe => recipe.id===id);
    const [description, setDescription]=useState('');
    const [errors, setErrors]=useState([]);
    const dispatch = useDispatch();

    const handleSubmit= async (e) => {
        e.preventDefault();
        setErrors([]);
        const payload= {
            userid:sessionUser.id,
            recipeid:specificRecipe.id,
            description
        };
        dispatch(addComment(payload)).catch(async (res) => {
            const data=await res.json();
            if(data && data.errors) setErrors(data.errors)
        })
        setShowModal(false);
    }


    return (
        <section className="review-detail-single">
        <form onSubmit={handleSubmit} className="modal-form">
        <ul className='modal-errors-container'>
        {errors.map((error, idx) => (
          <li className='modal-errors' key={idx}>{error}</li>
        ))}
      </ul>
        <label>Add A Comment</label>
        <textarea
        onChange={(e) =>setDescription(e.target.value)}
        value={description}
        placeholder="Please be kind"
        required
        />
        <button className="modal-button" type="submit">
        Submit
        </button>
        </form>
        </section>
    )
}

export default CreateComment;
