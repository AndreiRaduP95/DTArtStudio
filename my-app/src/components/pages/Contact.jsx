import Navbar from '../complex/Navbar';
import Footer from '../complex/Footer';
import '../../styling/Navbar.css';
import '../../styling/Acasa.css';
import '../../styling/Footer.css';
import '../../styling/Contact.css';

import React  from 'react';

const Contact = () => {
    return (
      <div className="contact">
           <header><h1>DT ArtStudio</h1>
          <p>Welcome to the homepage of our architecture projects!</p></header>
          <Navbar />
          <section>
          <p>
          DT ArtStudio was founded in 2010 by a passionate team of architects and designers with a shared vision:
          to transform spaces into works of art. Our journey started with a small studio and a big dream to make a
          lasting impact in the world of architecture. Over the years, we have grown into a dynamic team of talented
          individuals who continue to innovate and push the boundaries of design.
        </p>
        </section>
        <Footer/>
      </div>
    );
  };
  
export default Contact;