// frontend/src/components/Navigation/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
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
      <div className='form-button'>
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <div className="nav-row">
    <Link to="/"><button className='home-button'>Home</button></Link>
    <img className="nav-logo" alt='logo'src='/images/Single_Origin_Logo.png' />
    <ul className='nav-list'>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
