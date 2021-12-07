import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {modifyComment} from '../../store/comments';


const EditComment= ({id, userid, recipeid, description, setShowModal}) => {
    const dispatch = useDispatch();
    const sessionUser= useSelector((state) => state.session.user.id);
    const comment= useSelector((state) => Object.values(state.recipe))
    const specificComment=comment.find(comm => comm.id===id);
    const [review, setReview]= useState('');
    console.log(comment);
    useEffect(() => {
        if(comment) {
            setReview(comment.description)
        }
    }, [dispatch, comment]);
    const handleSubmit= async (e) => {
        e.preventDefault();
        const payload= {
            ...comment,
            id,
            userid:sessionUser,
            recipeid,
            description:review
        };
        dispatch(modifyComment(payload)).catch(async (res) => {
            const data=await res.json();
        })
        setShowModal(false);
    };

    return (
        <section className='edit-comment-container'>
        <form onSubmit={handleSubmit} className='modal-form'>
        <label>
        Comment
        </label>
        <input type='text'
        onChange={(e) =>setReview(e.target.value)}
        value={review}
        placeholder='Please be kind'
        />
        <button className='modal-button' type='submit'>
        Edit Comment
        </button>
        </form>
        </section>
    )
}
export default EditComment;
