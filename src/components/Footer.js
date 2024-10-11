import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>MARITIME MARVEL CRUISES</h3>
          <p>We provide an experience of a lifetime</p>
        </div>
        <div className="footer-right">
          <p><strong>Connect with us</strong></p>
          <p>+00 000 000 00</p>
          <p>team@maritimemarvelcruises.com</p>
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
        <p>MMC © All rights reserved 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
