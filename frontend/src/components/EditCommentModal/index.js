import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditComment from './EditComment';


function EditCommentModal({id}) {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
    <div className='modal-button-submit-container'>
      <button className='modal-button-submit' onClick={() => setShowModal(true)}>Edit Comment</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditComment id={id} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>

  );
}

export default EditCommentModal;
