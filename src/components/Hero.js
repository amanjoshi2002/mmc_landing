import React, { useEffect } from 'react';
import Header from './Header';
import './Hero.css';

function Hero() {
  useEffect(() => {
    console.log('Hero component mounted');
  }, []);

  return (
    <section className="hero">
      <Header />
      <div className="video-background">
        <iframe
       src="https://www.youtube.com/embed/ySlSNIyPj1o?autoplay=1&mute=1&controls=0&playlist=ySlSNIyPj1o&modestbranding=1&rel=0" // Ensure all parameters are set correctly
       title="YouTube video"
       frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
       allowFullScreen
        ></iframe>
      </div>
      <div className="hero-content">
        <h1>Experience the Voyage Of a Lifetime</h1>
        <p>Discover the magic of the seas with Maritime Marvel Cruises. Unparalleled luxury and unforgettable destinations await.</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;