import React from 'react'
import Hero from './Hero/Hero'
import FeaturedSection from './FeaturedSection/FeaturedSection'
import Category from './Category/Category'
import AuthorList from '../AuthorList/AuthorList'
import Joinus from '../Joinus/Joinus.jsx'
import Marquee from '../marquee/Marquee.jsx'
import Section from '../Section/Section.jsx'
const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedSection/>
        <Category/>
        <AuthorList/>
        <Marquee/>
        <Joinus/>

    </div>
  )
}

export default Home
