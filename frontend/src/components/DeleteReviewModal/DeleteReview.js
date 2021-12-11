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
    <div className="modal-form">
        <h3 className="modal-content">Are you sure?</h3>
        <button className="modal-button" onClick={deleteCheckPoint}>Yes, Delete My Review</button>
    </div>
)
};
export default DeleteReview;
