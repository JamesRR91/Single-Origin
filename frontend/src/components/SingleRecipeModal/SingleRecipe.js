import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import EditRecipeModal from '../EditRecipeModal';
import DeleteRecipeModal from '../DeleteRecipeModal';
import CommentListModal from '../CommentListModal';

const SingleRecipe = ({ id, setShowModal}) => {
    const sessionUser = useSelector((state) =>state.session.user.id);
    const recipes = useSelector((state) => state.recipe[id])
    const dispatch = useDispatch();
    const [title, setTitle]= useState('');
    const [brewtype, setBrewType] = useState('');
    const [roasttype, setRoastType] = useState('');
    const [grindlevel, setGrindLevel] = useState('');
    const [coffeedose, setCoffeeDose] = useState('');
    const [waterdose, setWaterDose] = useState('');
    const [brewtime, setBrewTime] = useState('');
    const [description, setDescription] = useState('');

    const recipesArray=Object.assign([], recipes);
    const recipesValue=Object.values(recipes.Comments)
    const commentDescriptions= recipesArray.Comments.map(comment => {
      return comment.description
    });


    // const mappedComments =Comments.map(({id, Comments[userid], Comments[recipeid],Comments[description]}) =>(
    //   id={Comments.id}
    //   key={Comments.id}
    //   description={Comments.description}
    // ))}
  useEffect(() => {
    if (recipes) {
            setTitle(recipes.title)
            setBrewType(recipes.brewtype)
            setRoastType(recipes.roasttype)
            setGrindLevel(recipes.grindlevel)
            setCoffeeDose(recipes.coffeedose)
            setWaterDose(recipes.waterdose)
            setBrewTime(recipes.brewtime)
            setDescription(recipes.description)
    }

  }, [dispatch,recipes]);

    return (
      <div className="card-grid-single">
      <div className='recipe-detail-single'>
      <h3 className='recipe-title-single'>{title}</h3>
        <div className='card-body-single'>
        <ul>
        <li className='recipe-brew-single'>How are you brewing?:{brewtype}</li>
        <li className='recipe-roast-single'>What type of roast?:{roasttype}</li>
        <li className='recipe-grind-single'>What type of grind?{grindlevel}</li>
        <li className='recipe-coffee-single'>How much coffee?{coffeedose}</li>
        <li className='recipe-water-single'>How much water?{waterdose}</li>
        <li className='recipe-time-single'>How long?{brewtime}</li>
        <li className="recipe-description-single">{description}</li>
        </ul>
        </div>
        <div className='button-row'>
          <EditRecipeModal id={id}/>
          <DeleteRecipeModal id={id}/>
        </div>
        <div className='comment-container'>
          {commentDescriptions.map(comment => (
            <div className='comment-container-single' key={comment}>
            <ul>
            <li>{comment}</li>
            </ul>

            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  export default SingleRecipe;
