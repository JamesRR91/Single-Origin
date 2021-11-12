import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateRecipe from './CreateRecipe';


function CreateRecipeModal() {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
      <button className='login-button' onClick={() => setShowModal(true)}>Submit New Recipe</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateRecipe setShowModal={setShowModal}/>
        </Modal>
      )}
    </>

  );
}

export default CreateRecipeModal;
