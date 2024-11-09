import React from 'react';
import './Busines.css'
import two_women from '../../assets/Client-First - IMAGES/mediem size image/two_woman.svg'
// Mock Data
const articles = [
    { title: 'Top 6 free website mockup tools 2022', description: 'Lorem ipsum dolor sit amet...', category: 'Business' },
    { title: 'Step-by-step guide to choosing great font pairs', description: 'Lorem ipsum dolor sit amet...', category: 'Business' },
    { title: 'Ten free Google fonts that you should use', description: 'Lorem ipsum dolor sit amet...', category: 'Business' },
    { title: 'What did I learn from doing 50+ design sprints?', description: 'Lorem ipsum dolor sit amet...', category: 'Business' },
];

const categories = [
    { name: 'Startup', color: '#FFD700' },
    { name: 'Business', color: '#D3D3D3' },
    { name: 'Economy', color: '#D3D3D3' },
    { name: 'Technology', color: '#D3D3D3' },
];

const tags = ['Business', 'Experience', 'Technology', 'Marketing', 'UI/UX'];

const Business = () => {
    return (
        <div className="business-page">
            <header className="business_header">
                <h1>Business</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </header>

            <section className="business_content">
                
                <div className="articles">
                    {articles.map((article, index) => (
                        <div key={index} className="article-card">
                            <img src={two_women} alt="Article" className="article-image" />
                            <div className="article-info">
                                <span className="article-category">{article.category}</span>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <aside className="sidebar">
                    <div className="categories">
                        <h3>Categories</h3>
                        {categories.map((cat, index) => (
                            <button key={index} style={{ backgroundColor: cat.color }} className="category-button">
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="tags">
                        <h3>All Tags</h3>
                        <div className="tag-buttons">
                            {tags.map((tag, index) => (
                                <button key={index} className="tag-button">
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default Business;
