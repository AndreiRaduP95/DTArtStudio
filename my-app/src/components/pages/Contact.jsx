import Navbar from '../complex/Navbar';
import Footer from '../complex/Footer';
import '../../styling/Navbar.css';
import '../../styling/Acasa.css';
import React  from 'react';

const Contact = () => {
    return (
      <div className="proiecte">
           <header><h1>DT ArtStudio</h1>
          <p>Welcome to the homepage of our architecture projects!</p></header>
          <Navbar />
        <Footer></Footer>
      </div>
    );
  };
  
export default Contact;