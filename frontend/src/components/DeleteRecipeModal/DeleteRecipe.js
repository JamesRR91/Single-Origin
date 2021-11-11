import {useDispatch} from 'react-redux';
import { deleteRecipe } from '../../store/recipes';
import {useParams, useHistory} from 'react-router-dom';

function DeleteRecipe({id}) {
    const {recipeId}=useParams()
    const dispatch= useDispatch();
    const history=useHistory();

    const deleteCheckPoint= async() => {
        dispatch(deleteRecipe(id))
        await history.push('/recipes')
    }


return (
    <div className="modal-form-container">
        <div className="double-check">Are you sure you wish to delete this?</div>
        <button className="delete-button" onClick={deleteCheckPoint}>Yes</button>
    </div>
)
}

export default DeleteRecipe;
