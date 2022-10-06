import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addReview } from '../../store/review';

const CreateReview = ({id, setShowModal}) => {
    const sessionUser = useSelector((state) => state.session.user)
    const grinders=useSelector((state) => Object.values(state.grinder))
    const specificGrinder=grinders.find(grinder => grinder.id===id);
    const [usetime, setUseTime]=useState('');
    const [usecase, setUseCase]=useState('');
    const [sale, setSale]=useState('');
    const [reccomendation, setReccomendation]=useState('');
    const [review, setReview]=useState('');
    const dispatch= useDispatch();

    const handleSubmit=async (e) => {
        e.preventDefault();
        const payload = {
            userid:sessionUser.id,
            grinderid:specificGrinder.id,
            usetime,
            usecase,
            sale,
            reccomendation,
            review
        };

        dispatch(addReview(payload)).catch(async (res) => {
            const data=await res.json();
        })
        setShowModal(false);
    }

    return (
        <section className='modal-container'>
        <h3 className='review-title'>Create Your Review</h3>
        <form onSubmit={handleSubmit} className='modal-form'>
        <div className='q-a-container-create'>
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
        </div>
        <div className='q-a-container-create'>
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
        </div>
        <div className='q-a-container-create'>
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
        </div>
        <div className='q-a-container-create'>
        <label>Would you reccomend this product?</label>
        <select
        onChange={(e) => setReccomendation(e.target.value)}
        value={reccomendation}
        required
        >
        <option value=''>Is it worth it?</option>
        <option value='Good for the price'>Good for the price</option>
        <option value='It is worth it on sale'>It's only worth it on sale</option>
        <option value='I would not reccomend it'>I would not reccomend it.</option>
        </select>
        </div>
        <div className='q-a-container'>
        <label>What else can you tell us?</label>
        <textarea
        onChange={(e) =>setReview(e.target.value)}
        value={review}
        placeholder='Tell us your thoughts'
        required
        />
        </div>
        <button className='modal-button' type='submit'>
        Submit Your Review
        </button>
        </form>
        </section>
    )
}

export default CreateReview;
