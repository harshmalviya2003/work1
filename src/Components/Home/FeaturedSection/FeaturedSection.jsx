// FeaturedSection.js
import React from 'react';
import './FeaturedSection.css';
import featuredImage from '../../../assets/Client-First - IMAGES/bulding image/white-concrete-building-1838640.svg' // Update path to your image

const FeaturedSection = () => (
  <div className="featured-section">
    <div className="featured-post">
      
      <img src={featuredImage} alt="Featured Post" className="featured-image" />
      <div className="featured-content">
        <p className="post-meta">
          By Anna Roy · May 24, 2024
        </p>
        <h2 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
        <p className="post-description">
          Turn your readers into loyal fans by combining unique value-driven content with clean design.
        </p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
    <div className="all-posts">
      <h1 className="section-title">All Posts</h1>
      <ul className="post-list">
        <li className="post-item highlighted">
          <p className="post-meta">In Design · August 2024</p>
          <h2 className="post-title">8 Figma design systems that you can download for free today.</h2>
        </li>
        <li className="post-item highlighted">
          <p className="post-meta">In Design · August 2024</p>
          <h2 className="post-title">8 Figma design systems that you can download for free today.</h2>
        </li>
        <li className="post-item highlighted">
          <p className="post-meta">In Design · August 2024</p>
          <h2 className="post-title">8 Figma design systems that you can download for free today.</h2>
        </li>
        <li className="post-item highlighted">
          <p className="post-meta">In Design · August 2024</p>
          <h2 className="post-title">8 Figma design systems that you can download for free today.</h2>
        </li>
        
      </ul>
    </div>
  </div>
  
);

export default FeaturedSection;
