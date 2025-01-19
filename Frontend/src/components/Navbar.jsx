import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import {useAuth} from '../context/AuthProvider'
import Logout from "./Logout";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const[authUser, setAuthUser] = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`z-50 h-12 flex justify-between items-center px-6 sm:px-10 md:px-20 sticky top-0 transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-md bg-gray-100" : ""
      }`}
    >
      {/* Logo Section */}
      <div>
        <h1 className="font-black text-lg sm:text-xl">BookShelf</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center text-sm space-x-10">
        <div className="space-x-10">
          <Link to="/" className="hover:font-semibold">
            Home
          </Link>
          <Link to="/course" className="hover:font-semibold">
            Books
          </Link>
          <Link to="/about" className="hover:font-semibold">
            About us
          </Link>
        </div>

        <div className="space-x-3">
          <input
            type="search"
            placeholder="Search"
            className="outline-none border border-gray-500 rounded-md pl-1 py-0.5"
          />
          <span>
            <MdOutlineLightMode className="inline size-5 cursor-pointer" />
          </span>
          {
            authUser?<Logout/>:<button className="bg-black text-white rounded-md px-1.5 py-1 border hover:bg-white hover:text-black hover:border-black">
            <Link to="/login">Login</Link>
          </button>
          }
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <HiX className="text-2xl cursor-pointer" />
          ) : (
            <HiMenu className="text-2xl cursor-pointer" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-100 shadow-md p-4 flex flex-col items-start space-y-4">
          <Link to="/" className="hover:font-semibold" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/course" className="hover:font-semibold" onClick={toggleMenu}>
            Books
          </Link>
          <Link to="/about" className="hover:font-semibold" onClick={toggleMenu}>
            About us
          </Link>
          {authUser?<Logout/>:<button
            className="bg-black text-white rounded-md px-1.5 py-1 border hover:bg-white hover:text-black hover:border-black"
            onClick={toggleMenu}
          >
            <Link to="/login">Login</Link>
          </button>}
        </div>
      )}
    </div>
  );
};

export default Navbar;
