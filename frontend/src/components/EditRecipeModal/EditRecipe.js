import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyRecipe } from '../../store/recipes';
// import  Dropdown  from "./Dropdown";

const EditRecipe = ({id, setShowModal}) => {
    const recipe = useSelector(state =>state.recipe[id])
    const sessionUser = useSelector((state) => state.session.user.id);
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
    useEffect(() => {
        if(recipe) {
            setTitle(recipe.title)
            setBrewType(recipe.brewtype)
            setRoastType(recipe.roasttype)
            setGrindLevel(recipe.grindlevel)
            setCoffeeDose(recipe.coffeedose)
            setWaterDose(recipe.waterdose)
            setBrewTime(recipe.brewtime)
            setDescription(recipe.description)
        }
    }, [dispatch, recipe]);
    const handleSubmit= async (e) => {
        e.preventDefault();
        setErrors([]);
        const payload = {
            ...recipe,
            userid:sessionUser,
            title,
            brewtype,
            roasttype,
            grindlevel,
            coffeedose,
            waterdose,
            brewtime,
            description
        };
        // let createdRecipe=await dispatch(modifyRecipe(payload));
        // if(createdRecipe){
        //     history.push('/recipe');
        // }

        // setShowModal(false);

        dispatch(modifyRecipe(payload)).catch(async (res) => {
            const data=await res.json();
            if(data && data.errors) setErrors(data.errors)
        })
        setShowModal(false);
    };


    return (
        <section className="modal-container">
        <h3 className='review-title'>Edit Your Recipe</h3>
        <form onSubmit={handleSubmit} className='modal-form'>
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
            required
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
            required
            />
            <label>Instructions</label>
            <textarea
            onChange={(e) =>setDescription(e.target.value)}
            value={description}
            placeholder='Press Start, Pour'
            required
            />
            <button className='modal-button' type='submit'>
          Edit Product
        </button>
        </form>
        </section>
    )
}
export default EditRecipe;
