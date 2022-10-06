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
    const [usetime, setUseTime]= useState('');
    const [usecase, setUseCase]= useState('');
    const [sale, setSale]=useState('');
    const [reccomendation, setReccommendation]=useState('');
    const [description, setDescription] = useState("");

    useEffect((id) => {
        if(reviews.Reviews[id]) {
            setUseTime(reviews.usetime[id]);
            setUseCase(reviews.usecase[id]);
            setSale(reviews.sale[id]);
            setReccommendation(reviews.reccomendation[id]);
            setDescription(reviews.description[id]);
        }
    }, [dispatch, reviews.Reviews[id]]);
    const handleSubmit= async (e) => {
        e.preventDefault();
        const payload = {
            id,
            userid:sessionUser,
            grinderid,
            usetime,
            usecase,
            sale,
            reccomendation,
            review: description,
        };
        dispatch(modifyReview(payload)).catch(async (res) => {
            const data = await res.json();
        });

        setShowModal(false);
    };

    return (
        <section className="modal-container">
        <h3 className='review-title'>Edit Your Review</h3>
      <form onSubmit={handleSubmit} className="modal-form">
      <label>How long did you use it for?</label>
      <select
      onChange={(e) => setUseTime(e.target.value)}
      value={usetime}
      required
      >
      <option value=''>Please select a time</option>
      <option value='Less than a month'>0-1 months</option>
      <option value='One to three months'>1-3 months</option>
      <option value='three to six months'>3-6 months</option>
      <option value='Less than a year'>6-12 months</option>
      <option value='Over a year'>1+ years</option>
      </select>
      <label> What did you use it for?</label>
      <select
      onChange={(e) => setUseCase(e.target.value)}
      value={usecase}
      required
      >
      <option value=''>Please select a usecase</option>
      <option value='drip coffee'>drip coffee</option>
      <option value='espresso'> espresso</option>
      <option value='hybrid, mostly drip'>Primarily drip coffee</option>
      <option value='hybrid, mostly espresso'>Primarily espresso</option>
      <option value='hybrid, equal use of both'>Epresso and drip equally</option>
      </select>
      <label>How did you find the grinder?</label>
      <select
      onChange={(e) => setSale(e.target.value)}
      value={sale}
      required
      >
      <option value=''>Please tell us how you found it</option>
      <option value='bought new, market price'>Bought new at full price</option>
      <option value='bought new, on sale'>Bought new, but on sale</option>
      <option value='Picked up refurb'>Picked it up refurbished</option>
      <option value='Refurbished myself'>Refurbished myself</option>
      </select>
      <label>What else can you tell us?</label>
      <textarea
      onChange={(e) =>setDescription(e.target.value)}
      value={description}
      placeholder='Tell us your thoughts'
      required
      />
      <label>Would you reccomend this product?</label>
      <select
      onChange={(e) => setReccommendation(e.target.value)}
      value={reccomendation}
      required
      >
      <option value=''>Is it worth it?</option>
      <option value='Good for the price'>Good for the price</option>
      <option value='It is worth it on sale'>It's only worth it on sale</option>
      <option value='I would not reccomend it'>I would not reccomend it.</option>
      </select>
      <button className='modal-button' type='submit'>
      Submit Your Review
      </button>
      </form>
    </section>
    );
};

export default EditReview;
