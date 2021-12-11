import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Review from './Review';

function ReviewModal({id, product, price, typeid, imgurl}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
          <button className='login-button' onClick={() => setShowModal(true)}>See The Reviews</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <Review id={id} product={product} price={price} typeid={typeid} imgurl={imgurl} setShowModal={setShowModal}/>
            </Modal>
          )}
        </div>
      );
}

export default ReviewModal;
