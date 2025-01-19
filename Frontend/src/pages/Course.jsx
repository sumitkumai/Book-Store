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
        const res = await axios.get('http://localhost:3000/api/book');
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
      <p className='text-balance text-center m-10'>Our bookstore offers a wide range of books, including bestsellers and rare finds, ensures affordable pricing, provides a cozy browsing experience, offers expert recommendations, and frequently hosts exciting literary events.</p>

      <div className='flex flex-wrap justify-center'>
        {authUser?book.map((item)=>(<Card item={item} key={item.id} />)):<h1 className='text-4xl font-semibold text-center mt-16 mb-40'>Only users with an account can access the books section.</h1>}
      </div>
    </div>
  )
}

export default Courses
