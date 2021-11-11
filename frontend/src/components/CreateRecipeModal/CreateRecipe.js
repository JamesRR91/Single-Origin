import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addRecipe } from '../../store/recipes';
// import  Dropdown  from "./Dropdown";

const CreateRecipe = () => {
    const [title, setTitle]= useState('');
    const [brewtype, setBrewType] = useState('');
    const [roasttype, setRoastType] = useState('');
    const [grindlevel, setGrindLevel] = useState('');
    const [description, setDescription] = useState('');
    const history =useHistory();
    const dispatch=useDispatch();

    const handleSubmit= async (e) => {
        e.preventDefault();
        const payload = {
            title,
            brewtype,
            roasttype,
            grindlevel,
            description
        };
        let createdRecipe=await dispatch(addRecipe(payload));
        if(createdRecipe){
            history.push('/recipe');
        }
    };

    return (
        <section className="new-recipe-container">
        <form onSubmit={handleSubmit} className='new-recipe-form'>
            <label>Title</label>
            <input type="text"
            onChange={(e) =>setTitle(e.target.value)}
            value={title}
            placeholder='New Recipe'
            />
            <label>Brew Method</label>
            <input
            onChange={(e) =>setBrewType(e.target.value)}
            value={brewtype}
            placeholder='Keurig'
            />
            <label>Roast</label>
            <input
            onChange={(e) =>setRoastType(e.target.value)}
            value={roasttype}
            placeholder='Whatever I Can Get'
            />
            <label>GrindLevel</label>
            <input
            onChange={(e) =>setGrindLevel(e.target.value)}
            value={grindlevel}
            placeholder='Who Cares'
            />
            <label>Instructions</label>
            <textarea
            onChange={(e) =>setDescription(e.target.value)}
            value={description}
            placeholder='Press Start, Pour'
            />
            <button className='submit-button' type='submit'>
          Add Product
        </button>
        </form>
        </section>
    )
}
export default CreateRecipe;
