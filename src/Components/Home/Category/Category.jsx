import React from 'react'
import './Category.css'
import icon_1 from '../../../assets/Client-First - icons/1.svg'
import image_con from '../../../assets/Client-First - IMAGES/big frame image/ground-group-growth-hands-461049.svg'
const Category = () => {
  return (
    <div className='category'>
      <h1>Choose a Catagary</h1>
      <div className='c-box'>
        <div className='box'>
            <img src={icon_1}lt="" />
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='box'>
            <img src={icon_1}lt="" />
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='box'>
            <img src={icon_1}lt="" />
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='box'>
            <img src={icon_1}lt="" />
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Category
