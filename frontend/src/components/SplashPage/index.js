import './SplashPage.css';
import { Link } from 'react-router-dom';
function SplashPage(){
    return (
        <div className="splashpage-container">
            <div className="splashpage-writing-container">
            <div className='splash-container'>
            <h2 className="splashpage-header">
            Welcome to Single Origin, a place for all home baristas.
            </h2>
            <div className='button-row'>
            <Link to='/recipe'><button className="test-new-button">
             Find New Recipes
             </button>
             </Link>
             <Link to='/grinder'><button className="test-new-button">
             Browse Through Grinder Reviews
             </button>
             </Link>
            </div>
            </div>
             </div>
            </div>
    );
}

export default SplashPage;
