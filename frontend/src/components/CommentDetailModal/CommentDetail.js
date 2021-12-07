import { useDispatch, useSelector} from 'react-redux';
import EditCommentModal from '../EditCommentModal';

const CommentDetail= ({id, userid, recipeid, description}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state =>state.session.user)

    let sessionLinks;
  if(sessionUser) {
    sessionLinks= (
      <div className='button-row'>
        <EditCommentModal id={id}/>
      </div>
    )
  }


    return (
        <div className="card-grid">
        <div className="comment-detail">
        <h2 className='comment-title'>Comments Section</h2>
            <div className="comment-body">
            <ul>
            <li className='comment-itself'>{description}</li>
            </ul>
            </div>
            {sessionLinks}
        </div>
        </div>
    )
}

export default CommentDetail
