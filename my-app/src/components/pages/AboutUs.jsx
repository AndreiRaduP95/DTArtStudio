import React from 'react';
import '../../styling/Navbar.css';
import Navbar from '../complex/Navbar';
import Footer from '../complex/Footer';
import '../../styling/Footer.css';
import '../../styling/AboutUs.css';



const AboutUs = () => {
  return (
    <div className="about-us">
         <header><h1>DT ArtStudio</h1>
        <p>Welcome to the homepage of our architecture projects!</p></header>
        <Navbar />

      <section>
        <h2>Our Story</h2>
        <p>
          DT ArtStudio was founded in 2010 by a passionate team of architects and designers with a shared vision:
          to transform spaces into works of art. Our journey started with a small studio and a big dream to make a
          lasting impact in the world of architecture. Over the years, we have grown into a dynamic team of talented
          individuals who continue to innovate and push the boundaries of design.
        </p>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
