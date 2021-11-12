import './SplashPage.css';
import { Link } from 'react-router-dom';
function SplashPage(){
    return (
        <div className="splashpage-container">
            <div className="splashpage-writing-container">
            <h2 className="splashpage-header">
            Welcome to Single Origin, a place for all home baristas.
            </h2>
            <Link to='/recipe'><button className="recipe-button">
             Find New Recipes
             </button>
             </Link>
             </div>
            </div>
    );
}

export default SplashPage;
