import {useDispatch} from 'react-redux';
import { deleteRecipe } from '../../store/recipes';
import {useHistory} from 'react-router-dom';

function DeleteRecipe({id, setShowModal}) {
    const dispatch= useDispatch();
    const history=useHistory();

    const deleteCheckPoint= async() => {
        dispatch(deleteRecipe(id))
        await history.push('/recipe')
        setShowModal(false);
    }



return (
    <div className="review-detail-single">
        <h3 className="modal-content-delete">Are you sure?</h3>
        <div className='button-row-delete'>
        <button className="modal-button" onClick={deleteCheckPoint}>Yes, Delete My Recipe</button>
        </div>
    </div>
)
}

export default DeleteRecipe;
