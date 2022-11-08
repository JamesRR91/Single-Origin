import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllComments} from '../../store/comments';
import CommentDetailModal from '../CommentDetailModal';
import EditCommentModal from '../EditCommentModal';

const CommentList= () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state =>state.session.user)
    const comments = useSelector(state =>Object.values(state.comment));
    useEffect(() =>{
        dispatch(getAllComments());
    }, [dispatch]);
    return (
        <div className="comment-list-container">
            {comments.map(({id, userid, recipeid, description}) => (
            <CommentDetailModal id={id}
                key={id}
                recipeid={recipeid}
                description={description}
                />
                ))}
                <div>
                <EditCommentModal id={id}/>
                </div>
            </div>
            )
        }

        export default CommentList;
