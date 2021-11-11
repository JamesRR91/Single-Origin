import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../../store/recipes';
import EditRecipeModal from '../EditRecipeModal';
import DeleteRecipeModal from '../DeleteRecipeModal';
import './RecipeDetail.css';

const RecipeDetail = ({ id, userid, grinderid, title, brewtype,roasttype,grindlevel,coffeedose,waterdose,brewtime,description }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  };
  return (
    <div className='recipe-detail'>
      <span className='recipe-title'>{title}</span>
      <div className='card-body'>
      <ul>
      <li className='recipe-brew'>How are you brewing?:{brewtype}</li>
      <li className='recipe-roast'>What type of roast?:{roasttype}</li>
      <li className='recipe-grind'>What type of grind?{grindlevel}</li>
      <li className="recipe-description">{description}</li>
      </ul>
      </div>
      <div className='button-row'>
        <EditRecipeModal />
        <DeleteRecipeModal />
        <button className='button'>Comment</button>
      </div>
    </div>
  );
};
export default RecipeDetail;
