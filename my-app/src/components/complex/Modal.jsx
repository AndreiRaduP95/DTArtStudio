import React from 'react';
import "../../styling/Modal.css"

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <img src={project.picture} alt={project.title} className="modal-image" />
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Modal;
