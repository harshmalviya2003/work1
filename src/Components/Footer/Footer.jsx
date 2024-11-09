import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Client-First - IMAGES/logo/Logo.svg'
import icon_1 from '../../assets/Client-First - icons/insta.svg';
import icon_2 from '../../assets/Client-First - icons/linkedin.svg';
import icon_3 from '../../assets/Client-First - icons/twitter.svg';
import icon_4 from '../../assets/Client-First - icons/facebook.svg';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='up'>
        <img src={logo} alt="" />
      <ul>
          
          <Link  target='_blank' to="/">Home</Link>
          <Link  target='_blank' to="/Blog">Blog</Link>
          <Link  target='_blank' to="/About Us">About Us</Link>
          <Link  target='_blank' to="/Contact">Contact Us</Link>
          <Link  target='_blank' to="/Privatepolicy">Privacy Policy</Link>
          
        </ul>
      </div>
      <div className="midd">
        <h1>Subscribe to our latest newspaper to get the lates upadte and news</h1>
        <input type="text" />
        <button>submit</button>
      </div>
      <div className='down'>
        <div>
          <p>indore, palsh parisar</p>
          <p>b07-704 mob.no 8319226300</p>
          
        </div>
        <div >
        <img src={icon_1} alt="" />
        <img src={icon_2} alt="" />
        <img src={icon_3} alt="" />
        <img src={icon_4} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Footer
