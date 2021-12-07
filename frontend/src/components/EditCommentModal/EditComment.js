import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const EditComment= ({id, userid, recipeid, description}) => {
    const dispatch = useDispatch();
    const sessionUser= useSelector((state) => state.session.user.id);
    const comment= useSelector((state) => state.recipe[Comments]);
    const [description, setDescription]= useState('');
    useEffect(() => {
        if(comment) {
            setDescription(comment.description)
        }
    }, [dispatch, comment]);
    const handleSubmit= async (e) => {
        e.preventDefault();
        const payload= {
            ...comment,
            userid:sessionUser,
            recipeid,
            description
        };
        dispatch(changeComment(payload)).catch(async (res) => {
            const data=await res.json();
        })
        setShowModal(false);
    }
}
export default EditComment;
