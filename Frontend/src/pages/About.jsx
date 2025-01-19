import React from 'react'
import {Link} from 'react-router-dom'
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const About = () => {
  return (
    <div className='md:flex md:h-[475px] mb-5'>
      <div>
        <img src='https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334860.jpg?ga=GA1.1.101557958.1729918671&semt=ais_hybrid' alt="Product" className='object-contain w-full h-full' />
      </div>
      <div className='w-1/2 mt-20 space-y-10 mx-auto'>
        <h1 className='text-3xl font-semibold text-pink-500'>WHO WE ARE.</h1>
        <p className='text-amber-800 tracking-wide'>We make books great again. Just kidding, books were always great!</p>
        <p className='tracking-wide'>Every month, we send our subscribers a box with the five best books of the month. These are bestsellers and classic books that deserve to be read and placed on your bookshelf. We select books according to the preferences of our customers. In addition, you can always attend our events, join the book club, or just visit our offline store in INDIA.</p>
        <div className='flex space-x-5 cursor-pointer'>
          <RiTwitterXFill/>
          <FaYoutube />
          <BiLogoInstagramAlt />
        </div>
        <button className='bg-pink-500 py-1 px-1.5 mr-4 text-white rounded-md hover:bg-pink-600'><Link to='/signup'>Sign Up</Link></button>
        <button className='bg-pink-500 py-1 px-1.5 text-white rounded-md hover:bg-pink-600'>Learn more</button>
      </div>
    </div>
  )
}

export default About
