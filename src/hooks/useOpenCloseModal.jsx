import { set } from 'lodash';
import React, { useState } from 'react';

function useOpenCloseModal(prop) {
  const [showModal, setShowModal] = useState(prop);

  const closeModal = () => setShowModal(false);

  return [showModal, setShowModal, closeModal];
  //here index0, index1-setter, index2-close callback
}

export default useOpenCloseModal;
