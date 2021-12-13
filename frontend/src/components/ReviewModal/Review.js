import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAllReviews } from '../../store/review';
import CreateReviewModal from '../CreateReviewModal';
import EditReviewModal from '../EditReviewModal';
import DeleteReviewModal from '../DeleteReviewModal';


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
        <img src={imgurl} className='img-modal'/>
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
            {reviewArray.map(({id, userid, grinderid, usetime, usecase, sale, reccomendation, review}) => (
                <div className='comment-container-single' key={id}>
                <ul className='list-container'>
                <div className='q-a-container'>
                <li className='review-list-single'>How long did you use it?</li>
                <li className='review-list-single'>{usetime}</li>
                </div>
                <div className='q-a-container'>
                <li className='review-list-single'>What did you use it for?</li>
                <li className='review-list-single'>{usecase}</li>
                </div>
                <div className='q-a-container'>
                <li className='review-list-single'>Where did you pick it up?</li>
                <li className='review-list-single'>{sale}</li>
                </div>
                <div className='q-a-container'>
                <li className='review-list-single'>What else do you want people to know?</li>
                <li className='review-list-single'>{review}</li>
                </div>
                <div className='q-a-container'>
                <li className='review-list-single'>Would you reccomend it?</li>
                <li className='review-list-single'>{reccomendation}</li>
                </div>
                <div className='review-map-buttons'>
                <li><EditReviewModal id={id} userid={userid} grinderid={grinderid}/></li>
                <li><DeleteReviewModal id={id} userid={userid} grinderid={grinderid}/></li>
                </div>
                </ul>
                </div>
            ))}
        </div>
        </div>
        </div>
    );

};

export default Review;
