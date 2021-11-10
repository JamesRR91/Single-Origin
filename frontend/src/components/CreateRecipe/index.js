import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addRecipes } from '../../store/recipes';

const createRecipe = () => {
    const [grinderid, setGrinderId] = useState('');
    const [brewtype, setBrewType] = useState('');
    const [roasttype, setRoastType] = useState('');
    const [description, setDescription] = useState('');
    const history =useHistory();
    const dispatch=useDispatch();

    const handleSubmit= (e) => {
        e.preventDefault();
        const payload = {
            grinderid,
            brewtype,
            roasttype,
            description
        };
        dispatch(addRecipes(payload));

        history.push('/');
    };

    return (
        <div className="new-recipe">
        <h3>Submit New Recipe</h3>
        <form onSubmit={handleSubmit} className='new-recipe'>
            <input
            onChange={(e) =>setGrinderId(e.target.value)}
            value={grinderid}
            placeholder='Cheap Blade Grinder'
            />
            <input
            onChange={(e) =>setBrewType(e.target.value)}
            value={brewtype}
            placeholder='Keurig'
            />
            <input 
            onChange={(e) =>setRoastType(e.target.value)}
            value={roasttype}
            placeholder='Whatever I Can Get'
            />
            <input
            onChange={(e) =>setDescription(e.target.value)}
            value={description}
            placeholder='Press Start, Pour'
            />
            <button className='submit-button' type='submit'>
          Add Product
        </button>
        </form>
        </div>
    )
}
export default createRecipe;
