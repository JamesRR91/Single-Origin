import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAllComments } from '../../store/comments';
import EditRecipeModal from '../EditRecipeModal';
import DeleteRecipeModal from '../DeleteRecipeModal';
import CreateCommentModal from '../CreateCommentModal';
import EditCommentModal from '../EditCommentModal';
import DeleteCommentModal from '../DeleteCommentModal';

const SingleRecipe = ({ id, setShowModal}) => {
    const sessionUser = useSelector((state) =>state.session.user.id);
    const recipes = useSelector((state) => state.recipe?.[id])
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
    const commentArray= recipesArray?.Comments
    // console.log('RECIPES', recipes)
    // console.log('RECIPEARRAY', recipesArray)


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

  useEffect(() => {
    dispatch(getAllComments(id));
  },[dispatch]);
    return (
      <div className="card-grid-single">
      <div className='review-detail-single'>
      <h3 className='review-title'>{title}</h3>
        <div className='card-body-single'>
        <ul className='review-detail-list-container'>
        <div className='q-a-container'>
        <li className='review-detail-list'>How are you brewing?:</li>
        <li>{brewtype}</li>
        </div>
        <div className='q-a-container'>
        <li className='review-detail-list'>What type of roast?:</li>
        <li>{roasttype}</li>
        </div>
        <div className='q-a-container'>
        <li className='review-detail-list'>What type of grind?:</li>
        <li>{grindlevel}</li>
        </div>
        <div className='q-a-container'>
        <li className='review-detail-list'>How much coffee?:</li>
        <li>{coffeedose}</li>
        </div>
        <div className='q-a-container'>
        <li className='review-detail-list'>How much water?:</li>
        <li>{waterdose}</li>
        </div>
        <div className='q-a-container'>
        <li className='review-detail-list'>How long?:</li>
        <li>{brewtime}</li>
        </div>
        <div className='q-a-container'>
        <li className="review-detail-list">Anything else?:</li>
        <li>{description}</li>
        </div>
        </ul>
      </div>
        <div className='button-row'>
          <EditRecipeModal id={id}/>
          <DeleteRecipeModal id={id}/>
          <CreateCommentModal id={id} />
        </div>
        <div className='comment-container'>
          {commentArray.map(({id, userid, recipeid, description}) => (
            <div className='comment-container-single' key={id}>
            <ul>
            <li className='comments'>{description}</li>
            <div className='button-row'>
            <li><EditCommentModal id={id} recipeid={recipeid} userid={userid}/></li>
            <li><DeleteCommentModal id={id} recipeid={recipeid} userid={userid}/></li>
            </div>
            </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  export default SingleRecipe;
