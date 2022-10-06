import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/review";
import {useHistory} from 'react-router-dom';

const DeleteReview = ({ id, userid, grinderid, review, setShowModal }) => {
  const dispatch = useDispatch();
  const history=useHistory();
  const sessionUser = useSelector((state) => state.session.user.id);
  const reviews = useSelector((state) => state?.grinder?.[grinderid].Reviews);
  const findReviews= reviews.find(reviewid => {
      return reviewid===id
  });


  const deleteCheckPoint= async() => {
    dispatch(deleteReview(id, grinderid))
    await history.push('/grinder')
    setShowModal(false);
}

return (
    <div className="review-detail-single">
        <h3 className="modal-content-delete">Are you sure? Once you delete this your data cannot be recovered</h3>
        <div className='button-row-delete'>
        <button className="modal-button" onClick={deleteCheckPoint}>Yes, Delete My Review</button>
        </div>
    </div>
)
};
export default DeleteReview;
