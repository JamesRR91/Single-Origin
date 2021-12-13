import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyComment } from "../../store/comments";
import { useHistory } from "react-router-dom";

const EditComment = ({ id, userid, recipeid, description, setShowModal }) => {
  const dispatch = useDispatch();
  const history=useHistory();
  const sessionUser = useSelector((state) => state.session.user.id);
  const comment = useSelector((state) => state?.recipe?.[recipeid]);
  const [review, setReview] = useState("");
  useEffect((id) => {
    if (comment.Comments[id]) {
      setReview(comment.description[id]);
    }
  }, [dispatch, comment.Comments[id]]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id,
      userid: sessionUser,
      recipeid,
      description: review,
    };
    dispatch(modifyComment(payload)).catch(async (res) => {
      const data = await res.json();
    });
    setShowModal(false);
  };

  return (
    <section className="modal-container">
      <form onSubmit={handleSubmit} className="modal-form">
        <label>Edit Your Comment</label>
        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
          placeholder="Please be kind"
          required
        />
        <button className="modal-button" type="submit">
          Edit Comment
        </button>
      </form>
    </section>
  );
};
export default EditComment;
