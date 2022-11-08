import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { makeLikes, deleteLikes } from "../../store/like";

const LikeToggle = ({id}) => {
  const dispatch=useDispatch();
//   const history=useHistory();
  const sessionUser=useSelector((state) => state.session.user.id);
  const recipe=useSelector((state)=> state.recipe)
  const likeState=useSelector((state) => state.like.liked)
  const [isLiked, setLikes] = useState(false);
  const [count, setCount] = useState(0);
  console.log('THE ID', id);
  const handleLike = async () => {
      console.log('WORK LIKE', isLiked);
      const payload = {
          userid:sessionUser,
          recipeid:id,
          liked:isLiked
      };
      if (!isLiked) {
          setLikes(true);
          dispatch(makeLikes(payload))
          setCount(count + 1);
      } else {
          setLikes(false);
          dispatch(deleteLikes(payload.id)).catch(async (res) => {
              const data=await res.json();
          })
          setCount(count-1);
      }
      console.log('Count', count)
  }

//   const { userid, recipeid } = useParams();
//   const history = useHistory();
//   useEffect(() => {
//     (async () => {

//       setLikes(likes.data.likes);
//     })();
//   }, []);

  const handleSubmit = () => {
  };

  return (
      <div className='like-container'>
      <button onClick={handleLike}><i class="fas fa-heart"></i></button>
      <p>{count}</p>
      </div>
  );
};

export default LikeToggle;
