import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditRecipe from './EditRecipe';


function EditRecipeModal({id}) {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
      <button className='login-button' onClick={() => setShowModal(true)}>Edit Your Recipe</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditRecipe id={id} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>

  );
}

export default EditRecipeModal;
