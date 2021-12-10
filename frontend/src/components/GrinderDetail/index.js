import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ReviewModal from "../ReviewModal";

const GrinderDetail= ({ id, name, price, typeid,}) => {
    const sessionUser= useSelector(state => state.session.user)
    const dispatch=useDispatch();
    let sessionLinks;
    if(sessionUser) {
        sessionLinks= (
          <div className='button-row'>
            <ReviewModal id={id} name={name} price={price} typeid={typeid}/>
          </div>
        )
      }


return (
    <div className='center-div'>
    <div className='card-grid'>
    <h3 className='recipe-title'>{name}</h3>
    <div className='card-body'>
    <ul className='recipe-single-card-container'>
    <li className='recipe-detail-list'>Price: ${price}</li>
    <li className='recipe-detail-list'>Best Used For: {typeid}</li>
    </ul>
    <div>
    {sessionLinks}
    </div>
    </div>
    </div>
    </div>
)
}

export default GrinderDetail;
