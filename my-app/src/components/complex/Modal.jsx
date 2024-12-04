import React, { useState } from "react";
import "../../styling/Modal.css";  // Ensure the correct path to the CSS file

const Modal = ({ project, onClose }) => {
  // Ensure useState is called correctly before any conditional rendering
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image navigation in the modal
  const nextImage = () => {
    if (currentImageIndex < project.picture.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Return nothing if no project is passed
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{project.title}</h2>

        {/* Carousel for images */}
        <div className="carousel">
          <button className="prev-button" onClick={prevImage}>
            &#8592;
          </button>

          <img
            src={Array.isArray(project.picture) ? project.picture[currentImageIndex] : project.picture}
            alt={project.title}
            className="modal-image"
          />

          <button className="next-button" onClick={nextImage}>
            &#8594;
          </button>
        </div>

        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Modal;
