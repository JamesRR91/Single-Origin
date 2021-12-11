import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyReview } from "../../store/review";
import { useHistory } from "react-router-dom";

const EditReview = ({ id, userid, grinderid, review, setShowModal }) => {
    const dispatch = useDispatch();
    const history=useHistory();
    const sessionUser = useSelector((state) => state.session.user.id);
    const reviews = useSelector((state) => state?.grinder?.[grinderid]);
    const [description, setDescription] = useState("");

    useEffect((id) => {
        if(reviews.Reviews[id]) {
            setDescription(reviews.description[id]);
        }
    }, [dispatch, reviews.Reviews[id]]);
    const handleSubmit= async (e) => {
        e.preventDefault();
        const payload = {
            id,
            userid:sessionUser,
            grinderid,
            review: description,
        };
        dispatch(modifyReview(payload)).catch(async (res) => {
            const data = await res.json();
        });

        setShowModal(false);
    };

    return (
        <section className="modal-container">
      <form onSubmit={handleSubmit} className="modal-form">
        <label>Edit Your Review</label>
        <input
          type="textarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Tell us your thoughts."
          required
        />
        <button className="modal-button" type="submit">
          Edit Review
        </button>
      </form>
    </section>
    );
};

export default EditReview;
