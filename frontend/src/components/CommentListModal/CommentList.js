import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllComments} from '../../store/comments';
import CommentDetailModal from '../CommentDetailModal';

const CommentList= () => {
    const dispatch = useDispatch();

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
            </div>
            )
        }

        export default CommentList;
