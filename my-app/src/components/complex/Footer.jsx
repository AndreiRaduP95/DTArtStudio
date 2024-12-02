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
              <h4>TRUSTED SERVICES</h4>
              <p>We have trusted customers</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="footer-icon support-icon"></i>
            <div>
              <h4>24/7 SUPPORT</h4>
              <p>014 1547 925 - 123 4567 890</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="footer-icon experience-icon"></i>
            <div>
              <h4>WELL EXPERIENCED</h4>
              <p>15 years of experience</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
