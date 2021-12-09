import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { makeLikes } from "../../store/like";

const LikeToggle = () => {
  const dispatch=useDispatch();
//   const history=useHistory();
  const sessionUser=useSelector((state) => state.session.user.id);
  const likeState=useSelector((state) => state.like.liked)
  const [likes, setLikes] = useState(false);

  const toggleLikes = () => setLikes( likes ? false : true );

  const { userid, recipeid } = useParams();
  const history = useHistory();
//   useEffect(() => {
//     (async () => {

//       setLikes(likes.data.likes);
//     })();
//   }, []);

  const handleSubmit = () => {
  };

  return (
      <div className='like-container'>
      <button onClick={toggleLikes}><i class="fas fa-heart"></i></button>
      </div>
  );
};

export default LikeToggle;
