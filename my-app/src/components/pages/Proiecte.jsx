import React, { useState, useEffect } from "react";
import Modal from "../complex/Modal"; // Ensure the path is correct
import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../../styling/Proiecte.css"; // Ensure the path is correct

const Proiecte = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/allProjects.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch project data");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debugging: Check the structure of fetched data
        setProjects(data.allProjects || []); // Corrected key name here
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  // Open modal with the selected project
  const openModal = (project) => {
    setSelectedProject(project); // Set the selected project
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null); // Close the modal
  };

  return (
    <div className="proiecte">
      <header>
        <h1>DT ArtStudio</h1>
        <p>Welcome to the homepage of our architecture projects!</p>
      </header>
      <Navbar />

      <div className="projects-container">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              className="project-card"
              key={project.id} // Ensure a unique key for each card
            >
              {/* Ensure 'picture' can be either a string or an array */}
              <img
                src={Array.isArray(project.picture) ? project.picture[0] : project.picture} // Use first image if it's an array
                alt={project.title}
                className="project-image"
              />
              <h2 className="project-title">{project.title}</h2>
              {/* Button to open the modal */}
              <button
                className="view-details-btn"
                onClick={() => openModal(project)} // Open modal on button click
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>

      {/* Render Modal for selected project */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}

      <Footer />
    </div>
  );
};

export default Proiecte;
