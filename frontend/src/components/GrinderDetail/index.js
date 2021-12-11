import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ReviewModal from "../ReviewModal";

const GrinderDetail= ({ id, product, price, typeid, imgurl}) => {
    const sessionUser= useSelector(state => state.session.user)
    const dispatch=useDispatch();
    let sessionLinks;
    if(sessionUser) {
        sessionLinks= (
          <div className='button-row'>
            <ReviewModal id={id} product={product} price={price} typeid={typeid} imgurl={imgurl}/>
          </div>
        )
      }


return (
    <div className='center-div'>
    <div className='card-grid'>
    <h3 className='recipe-title'>{product}</h3>
    <img src={imgurl} className='img'/>
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
