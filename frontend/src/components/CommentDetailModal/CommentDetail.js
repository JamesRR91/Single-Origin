import { useDispatch, useSelector} from 'react-redux';

const CommentDetail= ({id, userid, recipeid, description}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state =>state.session.user)


    return (
        <div className="card-grid">
        <div className="comment-detail">
        <h2 className='comment-title'>Comments Section</h2>
            <div className="comment-body">
            <ul>
            <li className='comment-itself'>{description}</li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default CommentDetail
