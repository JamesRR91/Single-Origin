import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteRecipe from './DeleteRecipe';


function DeleteRecipeModal() {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
      <button className='login-button' onClick={() => setShowModal(true)}>Delete Your Recipe</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteRecipe />
        </Modal>
      )}
    </>

  );
}

export default DeleteRecipeModal;
