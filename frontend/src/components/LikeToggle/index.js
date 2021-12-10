import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { makeLikes, deleteLikes } from "../../store/like";

const LikeToggle = () => {
  const dispatch=useDispatch();
//   const history=useHistory();
  const sessionUser=useSelector((state) => state.session.user.id);
  const likeState=useSelector((state) => state.like.liked)
  const [isLiked, setLikes] = useState(false);
  console.log(sessionUser);
    let likesCounter=0;
  const handleLike = async () => {
      console.log('WORK LIKE', isLiked);
      const payload = {
          userid:sessionUser.id,
        //   recipeid,
        //   liked
      };
      if (!isLiked) {
          setLikes(true);
          dispatch(makeLikes(payload)).catch(async (res) => {
              const data=await res.json;
          })
          likesCounter+=1;
      } else {
          setLikes(false);
          dispatch(deleteLikes(payload.id)).catch(async (res) => {
              const data=await res.json();
          })
          likesCounter-=1;
      }
      console.log('Count', likesCounter)
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
      <p>{likesCounter}</p>
      </div>
  );
};

export default LikeToggle;
