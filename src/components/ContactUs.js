// src/components/ContactUs.js
import React from 'react';


const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="get-in-touch">
          <h2>Get in Touch</h2>
          <p>Phone: +91 1234567890</p>
          <p>Email: info@maritimemarvel.com</p>
          <p>Address: Head Office, 123, Indraprastha, Dadichi, Goa-403371</p>
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