import React from 'react'
import doctor from '../assets/doctor.jpg'

const Banner = () => {
  return (
    <div className='flex flex-col md:justify-between md:flex-row'>
      <div className='mx-5 mt-5 md:w-1/2 md:mx-20 md:mt-20 space-y-12 order-2 md:order-1'>
        <h1 className='text-2xl md:text-5xl font-bold text-balance'>Consult <span className='text-pink-500'>Best Doctors</span> Your Nearby Location.</h1>
        <p className='text-xl font-medium text-balance'>Your health is our priority!
        We’re always here with the care, support, and guidance you need to live your healthiest life. Count on us—because your well-being matters!</p>
        <button className='bg-pink-500 text-white p-1.5 rounded-md font-semibold hover:bg-pink-600'><a href="#freebook">Get Started</a></button>
      </div>

      <div className='md:w-1/2 md:pl-28 order-1'>
        <img src={doctor} alt="error" className='h-96' />
      </div>
    </div>
  )
}

export default Banner
