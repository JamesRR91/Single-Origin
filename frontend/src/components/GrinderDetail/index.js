import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ReviewModal from "../ReviewModal";
import './GrinderDetail.css'

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
    <div className='wrapper'>
    <div className='card'>
    <div className='photo-and-title'>
    <img src={imgurl} className='img-grinder'/>
    </div>
    <div className='card-body'>
    <h3 className='grinder-title'>{product}</h3>
    <ul className='grinder-single-card-container'>
    <li className='grinder-detail-list'>Price: ${price}</li>
    <li className='grinder-detail-list'>Best Used For: {typeid}</li>
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
