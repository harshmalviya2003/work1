import React from 'react'
import './Twosection.css'
import yello_bar from '../../../assets/Client-First - IMAGES/shape.svg'
import purpul_bar from '../../../assets/Client-First - IMAGES/shape-1.svg'
const Twosection = () => {
  return (
    <div className="Twosection-container">
      <div className="Twosection-header">
        <div className="yellow-bar"> <img src={yello_bar} alt="" /></div>
        <div className="purple-bar"> <img src={purpul_bar} alt="" /></div>
      </div>
      <div className="Twosection-content">
        <div className="left-section">
          <h2>We are a community of</h2>
          <h1>Content writers who share their learnings</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button>Read More</button>
        </div>
        <div className="right-section">
          <h2>Creating valuable content for</h2>
          <h1>Creatives all around the world</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  );
};

export default Twosection
