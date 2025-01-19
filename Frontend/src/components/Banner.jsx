import React from 'react'
import BannerImage from '../assets/Banner.jpg'

const Banner = () => {
  return (
    <div className='flex flex-col md:justify-between md:flex-row'>
      <div className='mx-5 mt-5 md:w-1/2 md:mx-20 md:mt-20 space-y-12 order-2 md:order-1'>
        <h1 className='text-2xl md:text-4xl font-bold text-balance'>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
        <p className='text-xl font-medium text-balance'>Discover endless books at unbeatable prices! From bestsellers to hidden gems, find your next read and start your literary adventure today. Fast delivery, amazing deals, and books for every reader!</p>
        <button className='bg-pink-500 text-white p-1.5 rounded-md font-semibold hover:bg-pink-600'><a href="#freebook">Get Started</a></button>
      </div>

      <div className='md:w-1/2 md:pl-28 order-1'>
        <img src={BannerImage} alt="error" className='h-96' />
      </div>
    </div>
  )
}

export default Banner
