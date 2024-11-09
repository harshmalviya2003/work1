import React from 'react';
import './Navbar.css';
import logo from '../../../assets/Client-First - IMAGES/logo/Logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => (
  <header className="header">
    <div className="logo"><img src={logo} alt="" /></div>
    <nav className="nav-links">
    
      <Link  target='_blank' to="/">Home</Link>
      <Link  target='_blank' to="/Blog">Blog</Link>
      <Link  target='_blank' to="/Contact">Contact us</Link>
      <Link  target='_blank' to="/Author">Author</Link>
      <Link  target='_blank' to="/Business">Business</Link>
      <button className="subscribe-button">Subscribe</button>
    </nav>
  </header>
);

export default Navbar;
