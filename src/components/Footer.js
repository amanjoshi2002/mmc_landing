import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>MARITIME MARVEL CRUISES</h3>
          <p>We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="footer-right">
          <p><strong>Connect with us</strong></p>
          <p>+00 000 000 00</p>
          <p>info@xyz.com</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-dribbble"></i>
            <i className="fab fa-behance"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Terms & Conditions | Privacy Notice and Cookies | Imprint</p>
        <p>MMC © All rights reserved 2022-2023</p>
      </div>
    </footer>
  );
};

export default Footer;
