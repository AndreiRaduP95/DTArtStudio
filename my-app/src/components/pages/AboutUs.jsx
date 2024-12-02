import React from 'react';
import '../../styling/Navbar.css';
import Navbar from '../complex/Navbar';

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

      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to create beautiful, functional, and sustainable spaces that improve the quality of life.
          We believe that good architecture can inspire, uplift, and connect people. Our goal is to make the world a
          better place, one project at a time.
        </p>
      </section>

      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Creativity:</strong> We value original, innovative ideas that break away from the ordinary.</li>
          <li><strong>Sustainability:</strong> We are committed to eco-friendly and sustainable design practices.</li>
          <li><strong>Collaboration:</strong> We believe in the power of teamwork and client collaboration to create the best results.</li>
          <li><strong>Quality:</strong> We take pride in delivering top-notch quality in every aspect of our work.</li>
          <li><strong>Integrity:</strong> We uphold the highest ethical standards in all our business practices.</li>
        </ul>
      </section>

      <section>
        <h2>Our Team</h2>
        <p>
          Our team is made up of diverse and talented professionals who bring their unique skills and perspectives to
          every project. From visionary architects to skilled designers and project managers, we work together to
          ensure each project is completed to the highest standard.
        </p>
        <p>
          At DT ArtStudio, we believe in continuous learning and growth, fostering a culture of creativity and
          collaboration. Our team members are passionate about what they do, and that passion is reflected in the
          work we create.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you'd like to learn more about our work or discuss a potential project, feel free to get in touch. We'd
          love to hear from you!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
