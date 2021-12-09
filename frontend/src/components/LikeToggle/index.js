import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
import Modal from "../modal";

const LikeToggle = () => {
  const [likes, setLikes] = useState([]);

  const { userid, recipeid } = useParams();
  const history = useHistory();
  useEffect(() => {
    (async () => {

      setLikes(likes.data.likes);
    })();
  }, []);

  const handleSubmit = () => {
  };

  return (
      <div className='like-container'>
      <button onClick={handleSubmit}><i class="fas fa-heart"></i></button>
      </div>
  );
};

export default LikeToggle;
