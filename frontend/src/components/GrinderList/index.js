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
        <div className="recipe-list-container">
        <div className='recipe-list-single'>
                {grinders.length>0 ? grinders.map(({id, name, price, typeid}) => (
                    <GrinderDetail id={id}
                        key={id}
                        name={name}
                        price={price}
                        typeid={typeid}
                    />
                )):null}
            </div>
        </div>
    )
}

export default GrinderList;