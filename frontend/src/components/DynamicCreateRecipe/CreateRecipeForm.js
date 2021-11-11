import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { addRecipe } from "../../store/recipes";


function DynamicCreateRecipe() {
    const [title, setTitle] = useState('');
    const [grinderid, setGrinderId] = useState('');
    const [brewtype, setBrewType] = useState('');
    const [roasttype, setRoastType] = useState('');
    const [description, setDescription] = useState('');
    const history =useHistory();
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;



    const handleSubmit= (e) => {
        e.preventDefault();
        const payload = {
            title,
            grinderid,
            brewtype,
            roasttype,
            description
        };
        dispatch(addRecipe(payload));

        history.push('/');
    };

    return (
        <form className='modal-form' onSubmit={handleSubmit}>
            <ul className='no-bullet'>
            </ul>
            <label>
                Title
            </label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label>
                Grinder
            </label>
            <input
                type="text"
                value={grinderid}
                onChange={(e) => setGrinderId(e.target.value)}
                required
            />
            <label>
                The Brew
            </label>
            <input
                type="text"
                value={brewtype}
                onChange={(e) => setBrewType(e.target.value)}
                required
            />
            <label>
                The Roast
            </label>
            <input
                type="text"
                value={roasttype}
                onChange={(e) => setRoastType(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>

        </form>
    );
}

export default DynamicCreateRecipe;
