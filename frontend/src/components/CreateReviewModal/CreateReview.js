import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addReview } from '../../store/review';

const CreateReview = ({id, setShowModal}) => {
    const sessionUser = useSelector((state) => state.session.user)
    const grinders=useSelector((state) => Object.values(state.grinder))
    const specificGrinder=grinders.find(grinder => grinder.id===id);
    const [review, setReview]=useState('');
    const dispatch= useDispatch();

    const handleSubmit=async (e) => {
        e.preventDefault();
        const payload = {
            userid:sessionUser.id,
            grinderid:specificGrinder.id,
            review
        };

        dispatch(addReview(payload)).catch(async (res) => {
            const data=await res.json();
        })
        setShowModal(false);
    }

    return (
        <section className='modal-container'>
        <form onSubmit={handleSubmit} className='modal-form'>
        <label>Make A Review</label>
        <input type='textarea'
        onChange={(e) =>setReview(e.target.value)}
        value={review}
        placeholder='Tell us your thoughts'
        required
        />
        <button className='modal-button' type='submit'>
        Submit Your Review
        </button>
        </form>
        </section>
    )
}

export default CreateReview;
