import React from 'react';


const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonials</h2>
      <hr className="testimonial-divider" />
      <div className="testimonial-content">
        <span className="testimonial-quote-left">“</span>
        <p>
          Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.
        </p>
        <span className="testimonial-quote-right">”</span>
      </div>
      <hr className="testimonial-divider" />
      <div className="profile-container">
        <img src="assets\images\Maskuserpic.png" alt="Jessey Kirk" className="profile-picture" />
        <div className="profile-info">
          <p className="profile-name">JESSEY KIRK</p>
          <p className="profile-affiliation">DESIGNMODO</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
