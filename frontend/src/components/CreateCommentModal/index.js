import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateComment from './CreateComment';

function CreateCommentModal() {
    const [showModal, setShowModal] = useState(false);

    return (

      <>
      <div className='modal-button-submit-container'>
        <button className='modal-button-submit' onClick={() => setShowModal(true)}>Add A Comment</button>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateComment setShowModal={setShowModal}/>
          </Modal>
        )}
      </>

    );
  }

  export default CreateCommentModal;
