import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../../store/recipes';

const RecipeDetail = ({ id, userid, grinderid, brewtype,roasttype,grindlevel,description }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  };
  return (
    <div className='recipe-detail'>
      <span className='recipe-title'>{userid}</span>
      <span>{grinderid}</span>
      <span>{brewtype}</span>
      <span>{roasttype}</span>
      <span>{grindlevel}</span>
      <span>{description}</span>
      <div className='button-row'>
        <button onClick={() => handleDelete(id)} className='delete-button'>
          Delete
        </button>
        <button className='update-button'>Update</button>
      </div>
    </div>
  );
};
export default RecipeDetail;
