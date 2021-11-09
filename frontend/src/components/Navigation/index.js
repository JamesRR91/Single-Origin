// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="login-bar">
        <NavLink to="/login" className='login-button'>Log In</NavLink>
        <NavLink to="/signup" className='login-signup-button'>Sign Up</NavLink>
        </div>
    );
  }

  return (
    <div className="login-bar-container">
    <ul className='login-ul'>
      <li className="login-li">
        <NavLink exact to="/" className="login-home-button">Home</NavLink>
        <NavLink exact to="/recipe" className="recipe-button">Find Recipes</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
