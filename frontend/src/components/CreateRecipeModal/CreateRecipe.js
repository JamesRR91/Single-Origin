import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../../store/recipes';
// import  Dropdown  from "./Dropdown";

const CreateRecipe = ({setShowModal}) => {
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle]= useState('');
    const [brewtype, setBrewType] = useState('');
    const [roasttype, setRoastType] = useState('');
    const [grindlevel, setGrindLevel] = useState('');
    const [coffeedose, setCoffeeDose] = useState('');
    const [waterdose, setWaterDose] = useState('');
    const [brewtime, setBrewTime] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch=useDispatch();
    let message;
    if (!sessionUser) {
        message = (
            <h3>
            Please login to submit
            </h3>

        )
    }

    const handleSubmit= async (e) => {
        e.preventDefault();
        setErrors([]);
        const payload = {
            userid:sessionUser.id,
            title,
            brewtype,
            roasttype,
            grindlevel,
            coffeedose,
            waterdose,
            brewtime,
            description
        };
        // let createdRecipe=await dispatch(addRecipe(payload))
        // if(createdRecipe){
        //     history.push('/recipe');
        // }

        dispatch(addRecipe(payload)).catch(async (res) => {
            const data=await res.json();
            if(data && data.errors) setErrors(data.errors)
        })
        setShowModal(false);
    };

    return (
        <section className="modal-container">
        <h3 className='review-title'>Create Your Recipe</h3>
        <form onSubmit={handleSubmit} className='modal-form'>
        {message}
        <ul className='modal-errors-container'>
        {errors.map((error, idx) => (
          <li className='modal-errors' key={idx}>{error}</li>
        ))}
      </ul>
            <label>Title</label>
            <input type="text"
            onChange={(e) =>setTitle(e.target.value)}
            value={title}
            placeholder='New Recipe'
            required
            />
            <label>Brew Method</label>
            <select
            onChange={(e) =>setBrewType(e.target.value)}
            value={brewtype}
            required
            >
            <option value=''>Please choose a method</option>
            <option value='Chemex'>Chemex</option>
            <option value='French Press'>French Press</option>
            <option value='Moka Pot'>Moka Pot</option>
            <option value='V60'>V60</option>
            <option value='Espresso'>Espresso</option>
            </select>
            <label>Roast</label>
            <select
            onChange={(e) =>setRoastType(e.target.value)}
            value={roasttype}
            required
            >
            <option value=''>Please choose a roast</option>
            <option value='Light Roast'>Light Roast</option>
            <option value='Medium Roast'>Medium Roast</option>
            <option value='Dark Roast'>Dark Roast</option>
            <option value='Espresso Roast'>Espresso Roast</option>
            </select>
            <label>GrindLevel</label>
            <select
            onChange={(e) =>setGrindLevel(e.target.value)}
            value={grindlevel}
            required
            >
            <option value=''>Please choose a grind setting</option>
            <option value='Very Coarse'>Very Coarse</option>
            <option value='Medium-Coarse'>Medium-Coarse</option>
            <option value='Medium'>Medium</option>
            <option value='Medium-Fine'>Medium-Fine</option>
            <option value='Fine'>Fine</option>
            <option value='Espresso'>Espresso</option>
            </select>
            <label>Coffee Amount</label>
            <input type="text"
            onChange={(e) =>setCoffeeDose(e.target.value)}
            value={coffeedose}
            placeholder='Just eyeballin'
            />
            <label>Water Amount</label>
            <input type="text"
            onChange={(e) =>setWaterDose(e.target.value)}
            value={waterdose}
            placeholder='Just eyeballin'
            required
            />
            <label>Extraction Time</label>
            <input type="text"
            onChange={(e) =>setBrewTime(e.target.value)}
            value={brewtime}
            placeholder='Just guess?'
            />
            <label>Instructions</label>
            <textarea
            onChange={(e) =>setDescription(e.target.value)}
            value={description}
            placeholder='Press Start, Pour'
            required
            />
            <button className='modal-button' type='submit'>
          Add Recipe
        </button>
        </form>
        </section>
    )
}
export default CreateRecipe;
