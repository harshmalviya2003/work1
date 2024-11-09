import React from 'react';
import './Marquee.css';
import logo_1 from '../../assets/Client-First - IMAGES/logo/Logo 1.svg'
import logo_2 from '../../assets/Client-First - IMAGES/logo/Logo 2.svg'
import logo_3 from '../../assets/Client-First - IMAGES/logo/Logo 3.svg'
import logo_4 from '../../assets/Client-First - IMAGES/logo/Logo 4.svg'
import logo_5 from '../../assets/Client-First - IMAGES/logo/Logo 5.svg'

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          <img src={logo_1} alt="Logo 1" className="marquee-image" />
          <img src={logo_2} alt="Logo 2" className="marquee-image" />
          <img src={logo_3} alt="Logo 3" className="marquee-image" />
          <img src={logo_4} alt="Logo 4" className="marquee-image" />
          <img src={logo_5} alt="Logo 5" className="marquee-image" />                
          <img src={logo_1} alt="Logo 1" className="marquee-image" />
          <img src={logo_2} alt="Logo 2" className="marquee-image" />
          <img src={logo_3} alt="Logo 3" className="marquee-image" />
          <img src={logo_4} alt="Logo 4" className="marquee-image" />
          <img src={logo_5} alt="Logo 5" className="marquee-image" />                
          <img src={logo_1} alt="Logo 1" className="marquee-image" />
          <img src={logo_2} alt="Logo 2" className="marquee-image" />
          <img src={logo_3} alt="Logo 3" className="marquee-image" />
          <img src={logo_4} alt="Logo 4" className="marquee-image" />
          <img src={logo_5} alt="Logo 5" className="marquee-image" />                
          <img src={logo_1} alt="Logo 1" className="marquee-image" />
          <img src={logo_2} alt="Logo 2" className="marquee-image" />
          <img src={logo_3} alt="Logo 3" className="marquee-image" />
          <img src={logo_4} alt="Logo 4" className="marquee-image" />
          <img src={logo_5} alt="Logo 5" className="marquee-image" />                
          <img src={logo_1} alt="Logo 1" className="marquee-image" />
          <img src={logo_2} alt="Logo 2" className="marquee-image" />
          <img src={logo_3} alt="Logo 3" className="marquee-image" />
          <img src={logo_4} alt="Logo 4" className="marquee-image" />
          <img src={logo_5} alt="Logo 5" className="marquee-image" />                
          
        </div>
      </div>
    </div>
  );
};

export default Marquee;
