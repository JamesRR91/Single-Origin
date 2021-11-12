import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateRecipe from './CreateRecipe';


function CreateRecipeModal() {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
    <div className='modal-button-submit-container'>
      <button className='modal-button-submit' onClick={() => setShowModal(true)}>Submit New Recipe</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateRecipe setShowModal={setShowModal}/>
        </Modal>
      )}
    </>

  );
}

export default CreateRecipeModal;
