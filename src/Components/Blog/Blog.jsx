import React from 'react';
import './Blog.css'
import blog_main from '../../assets/Client-First - IMAGES/mediem size image/Blog_top.svg'
import all_post from '../../assets/Client-First - IMAGES/mediem size image/2.svg'
import Category from '../Home/Category/Category';
import Joinus from '../Joinus/Joinus';

// Mock Data
const featuredPost = {
    title: 'Step-by-step guide to choosing great font pairs',
    author: 'John Doe',
    date: 'May 20, 2023',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: {all_post},
};

const posts = [
    { category: 'Startup', title: 'Design tips for designers that cover everything you need', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', image: 'https://via.placeholder.com/150', id: 1 },
    { category: 'Business', title: 'How to build rapport with your web design clients', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', image: 'https://via.placeholder.com/150', id: 2 },
    { category: 'Startup', title: 'Logo design trends to avoid in 2022', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', image: 'https://via.placeholder.com/150', id: 3 },
    { category: 'Technology', title: '8 Figma design systems you can download for free today', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', image: 'https://via.placeholder.com/150', id: 4 },
    { category: 'Economy', title: 'Font sizes in UI design: The complete guide to follow', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', image: 'https://via.placeholder.com/150', id: 5 },
];

const Blog = () => {
    return (
        <div className="blog-page">
            <section className="blog_featured-post">
                <img src={blog_main} alt="Featured" className="blog_featured-image" />
                <div className="blog_featured-content">
                    <h3>Featured Post</h3>
                    <h2>{featuredPost.title}</h2>
                    <p className="blog_author-info">By {featuredPost.author} • {featuredPost.date}</p>
                    <p>{featuredPost.description}</p>
                    <button className="blog_read-more">Read More</button>
                </div>
            </section>

            
            <section className="all-posts">
            <h3>All Posts</h3>
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <img src={all_post} alt={post.title} className="post-image" />
                        <div className="post-content">
                            <span className="post-category">{post.category}</span>
                            <h4>{post.title}</h4>
                            <p>{post.description}</p>
                        </div>
                    </div>
                ))}
            </section>
            <Category/>
            <Joinus/>
        </div>
    );
};

export default Blog;
