import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReview from './EditReview';


function EditReviewModal({id, userid, grinderid}) {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
    <div className='modal-button-submit-container'>
      <button className='modal-button-submit' onClick={() => setShowModal(true)}>Edit Review</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReview id={id} userid={userid} grinderid={grinderid} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>

  );
}

export default EditReviewModal;
