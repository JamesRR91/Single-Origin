import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentDetail from './CommentDetail';


function CommentDetailModal() {
    const [showModal, setShowModal] = useState(false);

    return (

      <>
      <div className='modal-button-submit-container'>
        <button className='modal-button-submit' onClick={() => setShowModal(true)}>View Comments</button>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CommentDetail setShowModal={setShowModal}/>
          </Modal>
        )}
      </>

    );
  }

  export default CommentDetailModal;
