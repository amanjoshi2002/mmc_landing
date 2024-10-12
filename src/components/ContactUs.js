// src/components/ContactUs.js
import React from 'react';


const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="get-in-touch">
          <h2>Get in Touch</h2>
          <p>Phone:(068914)+65 90556461</p>
          <p>Email: team@maritimemarvelcruises.com</p>
          <p>Address: Singapore Business Federation Center
          #14-04, 160 Robinson Road,Singapore</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
        <div className="contact-form">
          <h2>We'd love to hear from you</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="send-button">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;