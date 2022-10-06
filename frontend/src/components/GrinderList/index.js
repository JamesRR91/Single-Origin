import './GrinderList.css';
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllGrinders } from "../../store/grinder";
import GrinderDetail from '../GrinderDetail';

const GrinderList = () => {
    const dispatch = useDispatch();

    const grinders=useSelector(state => Object.values(state.grinder));
    console.log(grinders);

    useEffect(() => {
        dispatch(getAllGrinders());
    }, [dispatch]);

    return (
        <div className="grinder-list-container">
        <div className='grinder-list-single'>
                {grinders.length>0 ? grinders.map(({id, product, price, typeid, imgurl}) => (
                    <GrinderDetail id={id}
                        key={id}
                        product={product}
                        price={price}
                        typeid={typeid}
                        imgurl={imgurl}
                    />
                )):null}
            </div>
        </div>
    )
}

export default GrinderList;
