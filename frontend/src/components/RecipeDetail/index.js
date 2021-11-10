import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../../store/recipes';
import './RecipeDetail.css';

const RecipeDetail = ({ id, userid, grinderid, title, brewtype,roasttype,grindlevel,description }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  };
  return (
    <div className='recipe-detail'>
      <span className='recipe-title'>{title}</span>
      <div className='card-body'>
      <span className='recipe-brew'>How are you brewing?:{brewtype}</span>
      <span className='recipe-roast'>What type of roast?:{roasttype}</span>
      <span className='recipe-grind'>What type of grind?{grindlevel}</span>
      <span className="recipe-description">{description}</span>
      </div>
      <div className='button-row'>
        <button onClick={() => handleDelete(id)} className='button'>
          Delete
        </button>
        <button className='button'>Update</button>
        <button className='button'>Comment</button>
      </div>
    </div>
  );
};
export default RecipeDetail;
