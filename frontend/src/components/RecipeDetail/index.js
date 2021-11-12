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
    <div className="card-grid">
    <div className='recipe-detail'>
    <h3 className='recipe-title'>{title}</h3>
      <div className='card-body'>
      <ul>
      <li className='recipe-brew'>How are you brewing?:{brewtype}</li>
      <li className='recipe-roast'>What type of roast?:{roasttype}</li>
      <li className='recipe-grind'>What type of grind?{grindlevel}</li>
      <li className='recipe-coffee'>How much coffee?{coffeedose}</li>
      <li className='recipe-water'>How much water?{waterdose}</li>
      <li className='recipe-time'>How long?{brewtime}</li>
      <li className="recipe-description">{description}</li>
      </ul>
      </div>
      <div className='button-row'>
        <EditRecipeModal id={id}/>
        <DeleteRecipeModal id={id}/>
      </div>
    </div>
    </div>
  );
};
export default RecipeDetail;
