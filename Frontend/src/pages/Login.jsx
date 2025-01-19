import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const userInfo = {
      email:email,
      password:password
    }

    await axios.post('http://localhost:3000/api/login',userInfo)
    .then((response) => {
      localStorage.setItem('User', JSON.stringify({id:response.data.user._id,email:response.data.user.email}));
      setAuthUser({ id: response.data.user._id, email: response.data.user.email });
      toast.success(response.data.message);
      navigate('/');
    }).catch((err)=>{
      toast.error(err.response.data.message || err.message);
    })
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-0">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative">
        <Link to="/" className="absolute top-4 right-4 z-50">✖</Link>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm border-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm sm:text-sm border-gray-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 active:bg-pink-700"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-5">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
