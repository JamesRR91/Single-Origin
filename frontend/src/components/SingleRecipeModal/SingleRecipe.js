import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import EditRecipeModal from '../EditRecipeModal';
import DeleteRecipeModal from '../DeleteRecipeModal';
import CreateCommentModal from '../CreateCommentModal';

const SingleRecipe = ({ id, setShowModal}) => {
    const sessionUser = useSelector((state) =>state.session.user.id);
    const recipes = useSelector((state) => state.recipe[id])
    console.log(recipes);
    console.log(sessionUser);
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
        <ul className='recipe-detail-list-container'>
        <li className='recipe-detail-list'>How are you brewing?: {brewtype}</li>
        <li className='recipe-detail-list'>What type of roast?: {roasttype}</li>
        <li className='recipe-detail-list'>What type of grind?: {grindlevel}</li>
        <li className='recipe-detail-list'>How much coffee?: {coffeedose}</li>
        <li className='recipe-detail-list'>How much water?: {waterdose}</li>
        <li className='recipe-detail-list'>How long?: {brewtime}</li>
        <li className="recipe-detail-list">Anything else?: {description}</li>
        </ul>
      </div>
        <div className='button-row'>
          <EditRecipeModal id={id}/>
          <DeleteRecipeModal id={id}/>
          <CreateCommentModal id={id} recipes={recipes} sessionUser={sessionUser}/>
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
