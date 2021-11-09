import './SplashPage.css';
import { NavLink } from 'react-router-dom';

function SplashPage(){
    return (
        <div className="splashpage-container">
            <div className="splashpage-writing-container">
            <h2 className="splashpage-header">
            Welcome to Single Origin, a place for all home baristas.
            </h2>
            <NavLink to="/login" className="splashpage-login">
            Become A Member
            </NavLink>
            </div>
        </div>
    );
}

export default SplashPage;
