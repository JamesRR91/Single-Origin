import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyComment } from "../../store/comments";

const EditComment = ({ id, userid, recipeid, description, setShowModal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user.id);
  const comment = useSelector((state) => state?.recipe?.[recipeid]);
  const [review, setReview] = useState("");
  // const commentDescriptions= recipesArray.Comments.map(comment => {
  //   return comment.description
  // });
  // const commentArray=comment?.Comments.map(comment => {
  //     return comment
  // });
  // const specificComment=comment.find(comm => comm.id===id);
  console.log("COMMENTID", id);
  console.log('USERID', userid);
  console.log('RECIPEID', recipeid);
  console.log('DESCRIPTION', comment.Comments);
  // console.log("ARRAY", commentDescriptions);
  // console.log('COMMENTS',commentArray);
  useEffect(() => {
    if (comment.Comments[id]) {
      setReview(comment.description[id]);
    }
  }, [dispatch, comment]);
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
    console.log("PAYLOAD", payload);
  };

  return (
    <section className="edit-comment-container">
      <form onSubmit={handleSubmit} className="modal-form">
        <label>Comment</label>
        <input
          type="text"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          placeholder="Please be kind"
        />
        <button className="modal-button" type="submit">
          Edit Comment
        </button>
      </form>
    </section>
  );
};
export default EditComment;
