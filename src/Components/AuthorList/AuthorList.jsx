import React from 'react';
import './AuthorList.css'
import use_1 from '../../assets/Client-First - IMAGES/photo in small circle/1.svg';
import use_2 from '../../assets/Client-First - IMAGES/photo in small circle/2.svg';
import use_3 from '../../assets/Client-First - IMAGES/photo in small circle/3.svg';
import use_4 from '../../assets/Client-First - IMAGES/photo in small circle/4.svg';
import icon_1 from '../../assets/Client-First - icons/insta.svg';
import icon_2 from '../../assets/Client-First - icons/linkedin.svg';
import icon_3 from '../../assets/Client-First - icons/twitter.svg';
import icon_4 from '../../assets/Client-First - icons/facebook.svg';

// Author data with imported images and custom icons
const authors = [
    { name: 'Floyd Miles', role: 'Tech Lead, GitHub', image: use_1, socials: [icon_1, icon_2, icon_3, icon_4] },
    { name: 'Dianne Russell', role: 'CEO, Dribbble', image: use_2, socials: [icon_1, icon_2, icon_3],icon_4},
    { name: 'Jenny Wilson', role: 'Product Designer, Microsoft', image: use_3, socials: [icon_1, icon_2, icon_3,icon_4] },
    { name: 'Leslie Alexander', role: 'Co-founder, Stripe', image: use_4, socials: [icon_1, icon_2, icon_3,icon_4] },
];

const AuthorList = () => {
    return (
        <div className="authors-list">
            <h2>List of Authors</h2>
            <div className="author-cards">
                {authors.map((author, index) => (
                    <div key={index} className="author-card">
                        <img src={author.image} alt={author.name} className="author-image" />
                        <h3>{author.name}</h3>
                        <p>{author.role}</p>
                        <div className="social-icons">
                            {author.socials.map((icon, idx) => (
                                <a key={idx} href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={icon} alt="social icon" className="social-icon" />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuthorList;
