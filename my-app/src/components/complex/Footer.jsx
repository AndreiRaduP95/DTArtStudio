import React from 'react';
import '../../styling/Footer.css';

const Footer = () => {
    return (
      <div className="footer">
        {/* Background behind the footer */}
        <div className="footer-background"></div>
  
        {/* Unified footer box */}
        <div className="footer-box">
          <div className="footer-item">
            <i className="footer-icon user-icon"></i>
            <div>
              <h4>SERVICII DE INCREDERE</h4>
              <p>We have trusted customers</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="footer-icon support-icon"></i>
            <div>
              <h4>SUPORT</h4>
              <p>+40754123456</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="footer-icon experience-icon"></i>
            <div>
              <h4>EXPERIENTA</h4>
              <p>15 years of experience</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
