import {useDispatch} from 'react-redux';
import { deleteRecipe } from '../../store/recipes';
import {useParams, useHistory} from 'react-router-dom';

function DeleteRecipe({id, setShowModal}) {
    const {recipeId}=useParams()
    const dispatch= useDispatch();
    const history=useHistory();

    const deleteCheckPoint= async() => {
        dispatch(deleteRecipe(id))
        await history.push('/recipe')
        setShowModal(false);
    }



return (
    <div className="modal-form">
        <h3 className="modal-content">Are you sure?</h3>
        <button className="modal-button" onClick={deleteCheckPoint}>Yes, Delete My Recipe</button>
    </div>
)
}

export default DeleteRecipe;
