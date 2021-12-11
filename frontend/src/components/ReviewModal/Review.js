import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAllReviews } from '../../store/review';
import CreateReviewModal from '../CreateReviewModal';


const Review = ({id, setShowModal}) => {
    const sessionUser = useSelector((state) =>state.session.user.id);
    const grinders = useSelector((state) => state.grinder?.[id]);
    const dispatch = useDispatch();
    const [product, setProduct]=useState('');
    const [price, setPrice]=useState('');
    const [typeid, setTypeId]=useState('');
    const [imgurl, setImgUrl]=useState('');

    const grindersArray=Object.assign([], grinders);
    const reviewArray= grindersArray?.Reviews

    useEffect(()=> {
        if(grinders) {
            setProduct(grinders.product);
            setPrice(grinders.price);
            setTypeId(grinders.typeid);
            setImgUrl(grinders.imgurl);
        }
    }, [dispatch, grinders]);

    useEffect(() => {
        dispatch(getAllReviews(id));
    }, [dispatch]);

    return (
        <div className='card-grid-single'>
        <div className='recipe-detail-single'>
        <h3 className='recipe-title-single'>{product}</h3>
        <img src={imgurl} className='img'/>
        <div className='card-body-single'>
        <ul className='recipe-detail-list-container'>
        <li className='recipe-detail-list'>Cost: ${price}</li>
        <li className='recipe-detail-list'>Best For: {typeid}</li>
        </ul>
        </div>
        <div className='button-row'>
        <CreateReviewModal id={id}/>
        </div>
        <div className='comment-container'>
            {reviewArray.map(({id, userid, grinderid, review}) => (
                <div className='comment-container-single' key={id}>
                <ul>
                <li>{review}</li>
                </ul>
                </div>
            ))}
        </div>
        </div>
        </div>
    );

};

export default Review;
