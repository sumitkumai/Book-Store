import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import {toast} from 'react-hot-toast'

const Logout = () => {

    const[authUser,setAuthUser] = useAuth();

    const handleLogout =()=>{
        try {
            setAuthUser(null);
            localStorage.removeItem('User');
            toast.success('Logout Successful');
        } catch (error) {
            toast.error('Error')
        }
    }

    return (
        <button className="bg-black text-white rounded-md px-1.5 py-1 border hover:bg-white hover:text-black hover:border-black" onClick={handleLogout}>Logout</button>
    )
}

export default Logout
