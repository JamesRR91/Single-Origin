import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAllReviews } from '../../store/review';


const Review = ({id, setShowModal}) => {
    const sessionUser = useSelector((state) =>state.session.user.id);
    const grinders = useSelector((state) => state.review?.[id]);
    const dispatch = useDispatch();
    const [name, setName]=useState('');
    const [price, setPrice]=useState(0);
    const [typeid, setTypeId]=useState('');

    const grindersArray=Object.assign([], grinders);
    const reviewArray= grindersArray?.Reviews

    useEffect(()=> {
        if(grinders) {
            const [name, setName]=(grinders.name);
            const [price, setPrice]=(grinders.price);
            const [typeid, setTypeId]=(grinders.typeid);
        }
    }, [dispatch, grinders]);

    useEffect(() => {
        dispatch(getAllReviews(id));
    }, [dispatch]);

    return (
        <div className='card-grid-single'>
        <div className='recipe-detail-single'>
        <h3 className='recipe-title-single'>{name}</h3>
        <div className='card-body-single'>
        <ul className='recipe-detail-list-container'>
        <li className='recipe-detail-list'>Cost: ${price}</li>
        <li className='recipe-detail-list'>Best For: {typeid}</li>
        </ul>
        </div>
        <div className='comment-container'>

        </div>
        </div>
        </div>
    )

}

export default Review;
