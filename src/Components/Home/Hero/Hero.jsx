import React from 'react';
import './Hero.css';

const Hero = () => (
  <main className="main-content container">
    <div className="content">
      <p className="posted-in">
        Posted in <span>Startup</span>
      </p>
      <h1 className="content-title">Step-by-step guide to choosing great font pairs</h1>
      <p className="author">
        By Anna Roy · May 24, 2024
      </p>
      <p className="description">
        A step-by-step guide on choosing the right font combinations
        that make your content pop and look professional.
      </p>
      <button className="read-more-button">Read More</button>
    </div>
  </main>
);

export default Hero;
