import Navbar from '../complex/Navbar';
import '../../styling/Navbar.css';
import '../../styling/Acasa.css';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';


const Acasa = () => {
    const [projects, setProjects] = useState([]);
  
    // Load project data from the JSON file in the public folder
    useEffect(() => {
      fetch('/projects.json')  // Fetch the JSON from the public folder
        .then((response) => response.json())
        .then((data) => setProjects(data.projects))  // Set the "projects" array from the JSON
        .catch((error) => console.error('Error loading project data:', error));
    }, []);
  
    // Carousel settings for smaller size with arrows enabled
    const settings = {
        dots: false, // Disable dots as per the design
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true, // Enable left and right arrows
        prevArrow: <button className="slick-prev"></button>, // Custom previous arrow
        nextArrow: <button className="slick-next"></button>, // Custom next arrow
      };
  
    return (
      <div className="acasa">
        <header>
          <h1>DT ArtStudio</h1>
          <p>Welcome to the homepage of our architecture projects!</p>
        </header>
        <Navbar />
  
        {/* Smaller Carousel */}
        <Slider {...settings}>
  {projects.map((project) => (
    <div key={project.id} className="carousel-item">
      <img src={project.picture} alt={project.title} className="carousel-image" />
      <div className="carousel-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href="#more" className="btn">Mai mult</a>
      </div>
    </div>
  ))}
</Slider>
  
    
      </div>
    );
  };
  
  export default Acasa;