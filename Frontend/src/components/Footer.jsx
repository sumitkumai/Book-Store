import React from 'react'
import {Link} from 'react-router-dom'
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <hr className='mb-8'/>
      <div className='text-sm space-y-8 flex flex-col items-center'>
        <div className='md:space-x-10 space-x-5'>
          <Link to="/" className='hover:font-semibold'>Home</Link>
          <Link to="/course" className='hover:font-semibold'>Books</Link>
          <Link to="/about" className='hover:font-semibold'>About us</Link>
          </div>
        <div className='flex space-x-5 cursor-pointer'>
          <RiTwitterXFill/>
          <FaYoutube />
          <BiLogoInstagramAlt />
        </div>
        <div>
          <p className='mb-8 text-balance text-center px-5'>Copyright © 2025 - All right reserved by ACME Industries Ltd.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
