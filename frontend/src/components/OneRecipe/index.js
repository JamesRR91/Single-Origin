import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import EditRecipeModal from '../EditRecipeModal';
import DeleteRecipeModal from '../DeleteRecipeModal';

const OneRecipe = ({ id, setShowModal}) => {
    const recipe = useSelector((state) => state.recipe[id])
    const dispatch = useDispatch();
    const [title, setTitle]= useState('');
    const [brewtype, setBrewType] = useState('');
    const [roasttype, setRoastType] = useState('');
    const [grindlevel, setGrindLevel] = useState('');
    const [coffeedose, setCoffeeDose] = useState('');
    const [waterdose, setWaterDose] = useState('');
    const [brewtime, setBrewTime] = useState('');
    const [description, setDescription] = useState('');
  useEffect(() => {
    if (recipe) {
            setTitle(recipe.title)
            setBrewType(recipe.brewtype)
            setRoastType(recipe.roasttype)
            setGrindLevel(recipe.grindlevel)
            setCoffeeDose(recipe.coffeedose)
            setWaterDose(recipe.waterdose)
            setBrewTime(recipe.brewtime)
            setDescription(recipe.description)
    }

  }, [dispatch,recipe]);

    return (
      <div>
      <div>
      <h3 className='recipe-title'>{title}</h3>
        <div>
        <ul>
        <li>How are you brewing?:{brewtype}</li>
        <li>What type of roast?:{roasttype}</li>
        <li>What type of grind?{grindlevel}</li>
        <li>How much coffee?{coffeedose}</li>
        <li>How much water?{waterdose}</li>
        <li>How long?{brewtime}</li>
        <li>{description}</li>
        </ul>
        </div>
        <div>
          <EditRecipeModal id={id}/>
          <DeleteRecipeModal id={id}/>
        </div>
      </div>
      </div>
    );
  };
  export default OneRecipe;
