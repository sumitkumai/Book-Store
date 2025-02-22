import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useAuth } from '../context/AuthProvider';

const Courses = () => {

  const[book,setBook] = useState([]);
  const[authUser,setAuthUser] = useAuth();

  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/book`);
        setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    }

    getBook();
  }, [])
  

  return (
    <div>
      <h1 className='text-3xl font-semibold text-center mt-16'>We're delighted to have to <span className='text-pink-500'>Here! :)</span></h1>
      <p className='text-balance text-center m-10'>Our healthcare service offers a wide range of medical specialists, including top experts and rare specialties, ensures affordable pricing, provides a comfortable consultation experience, offers personalized treatment recommendations, and frequently hosts informative health events.</p>

      <div className='flex flex-wrap justify-center'>
        {authUser?book.map((item)=>(<Card item={item} key={item.id} />)):<h1 className='text-4xl font-semibold text-center mt-16 mb-40'>Only users with an account can access the books section.</h1>}
      </div>
    </div>
  )
}

export default Courses
