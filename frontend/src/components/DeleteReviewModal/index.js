import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReview from './DeleteReview';


function DeleteReviewModal({id, userid, grinderid}) {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
    <div className='modal-button-submit-container'>
      <button className='modal-button-submit' onClick={() => setShowModal(true)}>Delete Review</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReview id={id} userid={userid} grinderid={grinderid} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>

  );
}

export default DeleteReviewModal;
