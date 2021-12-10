import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import EditRecipeModal from '../EditRecipeModal';
import DeleteRecipeModal from '../DeleteRecipeModal';
import SingleRecipeModal from '../SingleRecipeModal';
import { getAllLikes } from '../../store/like';
import LikeToggle from '../LikeToggle';
import './RecipeDetail.css';

const RecipeDetail = ({ id,title, brewtype,roasttype,grindlevel,coffeedose,waterdose,brewtime,description }) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getAllLikes());
}, [dispatch]);
  let sessionLinks;
  if(sessionUser) {
    sessionLinks= (
      <div className='button-row'>
        <EditRecipeModal id={id}/>
        <DeleteRecipeModal id={id}/>
        <SingleRecipeModal id={id}/>
        <LikeToggle id={id}/>
      </div>
    )
  }

  return (
    <div className='center-div'>
    <div className="card-grid">
    <div className='recipe-detail'>
    <h3 className='recipe-title'>{title}</h3>
      <div className='card-body'>
      <ul className='recipe-single-card-container'>
      <li className="recipe-detail-list">How are you brewing?: {brewtype}</li>
      <li className="recipe-detail-list">What type of roast?: {roasttype}</li>
      <li className="recipe-detail-list">What type of grind? {grindlevel}</li>
      <li className="recipe-detail-list">How much coffee?: {coffeedose}</li>
      <li className="recipe-detail-list">How much water?: {waterdose}</li>
      <li className="recipe-detail-list">How long?: {brewtime}</li>
      <li className="recipe-detail-list">Anything else?: {description}</li>
      </ul>
      </div>
      <div>
        {sessionLinks}
      </div>
    </div>
    </div>
    </div>
  );
};
export default RecipeDetail;
