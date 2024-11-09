import React from 'react';

import Navbar from './Components/Home/Navbar/Navbar';
import FeaturedSection from './Components/Home/FeaturedSection/FeaturedSection';
import Twosection from './Components/Home/Twosection/Twosection';
import Category from './Components/Home/Category/Category';
import Footer from './Components/Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Privatepolicy from './Components/Privatpolicy/Privatepolicy';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Author from './Components/Author/Author';
import Business from './Components/Business/Business';
import Blog from './Components/Blog/Blog';



const App = () => {
  return (
    
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='Privatepolicy' element={<Privatepolicy/>}></Route>
      <Route path='Author' element={<Author/>}></Route>
      <Route path='Business' element={<Business/>}></Route>
      <Route path='Blog' element={<Blog/>}></Route>
    </Routes>
    <Footer/>
    </div>
    
  );

};

export default App;
