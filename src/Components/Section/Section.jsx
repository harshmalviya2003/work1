import React from 'react';
import './Section.css'
import userImage from '../../assets/Client-First - IMAGES/photo in small circle/1.svg'; // replace with the actual path of the user image
 // replace with the actual path of the next icon
 // replace with the actual path of the prev icon

const Section = () => {
    return (
        <div className="testimonial-section">
            <div className="testimonial-content">
                <div className="testimonial-heading">
                    <h6>TESTIMONIALS</h6>
                    <h2>What people say about our blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="testimonial-quote">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="testimonial-author">
                        <img src={userImage} alt="Jonathan Vallem" className="author-image" />
                        <div className="author-info">
                            <h4>Jonathan Vallem</h4>
                            <p>Senior UI/UX Designer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-navigation">
                    <button className="nav-button">
                        <img src={prevIcon} alt="Previous" />
                    </button>
                    <button className="nav-button">
                        <img src={nextIcon} alt="Next" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section;
