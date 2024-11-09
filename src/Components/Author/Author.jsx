import React from 'react'
import './Author.css'
import authore from '../../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg'
import bulding_1 from '../../assets/Client-First - IMAGES/bulding image/1.svg'
import gropu_people from '../../assets/Client-First - IMAGES/mediem size image/Author.svg'
const Author = () => {
    return (
        <div className="author-blog">
            {/* Author Section */}
            <section className="author-section">
                <img
                    src={authore}
                    alt="Author"
                    className="author-image"
                />
                <div className="author-info">
                    <h1>Hey there, I’m Andrew Johnson and welcome to my Blog</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Non blandit massa enim. Sociis natoque
                        penatibus et magnis dis parturient montes.
                    </p>
                    <div className="author-socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </section>
            {/* Divider */}
            <div className="divider"></div>

            {/* Blog Posts Section */}
            <section className="posts-section">
                <h2>My Posts</h2>

                <div className="post">
                    <img src={gropu_people} alt="Post" className="post-image" />
                    <div className="post-content">
                        <span className="post-category">Business</span>
                        <h3>Font sizes in UI design: The complete guide to follow</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className="post">
                    <img src={bulding_1} alt="Post" className="post-image" />
                    <div className="post-content">
                        <span className="post-category">Economy</span>
                        <h3>How to build rapport with your web design clients</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );


}

export default Author
