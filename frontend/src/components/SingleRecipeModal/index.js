import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SingleRecipe from './SingleRecipe';

function SingleRecipeModal({id}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
          <button className='login-button' onClick={() => setShowModal(true)}>More Details</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <SingleRecipe id={id} setShowModal={setShowModal}/>
            </Modal>
          )}
        </div>
      );
}

export default SingleRecipeModal;
