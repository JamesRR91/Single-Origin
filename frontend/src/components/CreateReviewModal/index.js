import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReview from './CreateReview';

function CreateReviewModal({id}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
          <button className='modal-button-review' onClick={() => setShowModal(true)}>Review This Grinder</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateReview id={id} setShowModal={setShowModal}/>
            </Modal>
          )}
        </div>
      );
}

export default CreateReviewModal;
