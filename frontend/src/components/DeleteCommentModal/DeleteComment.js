import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/comments";
import {useHistory} from 'react-router-dom';

const DeleteComment = ({ id, userid, recipeid, description, setShowModal }) => {
  const dispatch = useDispatch();
  const history=useHistory();
  const sessionUser = useSelector((state) => state.session.user.id);
  const comment = useSelector((state) => state?.recipe?.[recipeid].Comments);
  const findComment= comment.find(commentid => {
      return commentid===id
  });
  const [review, setReview] = useState("");

  const deleteCheckPoint= async() => {
    dispatch(deleteComment(id))
    await history.push('/recipe')
    setShowModal(false);
}

return (
    <div className="review-detail-single">
        <h3 className="modal-content-delete">Are you sure?</h3>
        <div className='button-row-review'>
        <button className="modal-button" onClick={deleteCheckPoint}>Yes, Delete My Comment</button>
        </div>
    </div>
)
};
export default DeleteComment;
