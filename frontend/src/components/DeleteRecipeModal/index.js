import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteRecipe from './DeleteRecipe';


function DeleteRecipeModal({id}) {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
      <button className='login-button' onClick={() => setShowModal(true)}>Delete Your Recipe</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteRecipe id={id} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>

  );
}

export default DeleteRecipeModal;
