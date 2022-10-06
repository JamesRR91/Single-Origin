import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteComment from './DeleteComment';


function DeleteCommentModal({id, userid, recipeid}) {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
    <div className='modal-button-submit-container'>
      <button className='modal-button-submit' onClick={() => setShowModal(true)}>Delete Comment</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteComment id={id} userid={userid} recipeid={recipeid} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>

  );
}

export default DeleteCommentModal;
