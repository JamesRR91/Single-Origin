import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentList from './CommentList';

function CommentListModal() {
    const [showModal, setShowModal]= useState(false);

    return (
        <>
        <div className="modal-button-single-container">
            <button className="modal-button" onClick={() => setShowModal(true)}>Comments</button>
        </div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CommentList setShowModal={setShowModal}/>
            </Modal>
          )}
        </>

      );
    }

  export default CommentListModal;
