import React from 'react';
import './ModalBox.css';

function ModalBox({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mymodal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}

export default ModalBox;