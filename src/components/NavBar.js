import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/global.css";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  // Function to determine if a link is active
  const isLinkActive = (to) => {
    return location.pathname === to;
  }

  return (
    <header>
      <div className='header-container'>
        <img src='/assets/dark_resized2.png' alt='Logo' />
        <nav ref={navRef}>
          <Link to='/' className={isLinkActive('/') ? 'active' : ''}>HOME</Link>
          <Link to='/about' className={isLinkActive('/about') ? 'active' : ''}>ABOUT</Link>
          <Link to='/adopt' className={isLinkActive('/adopt') ? 'active' : ''}>ADOPT</Link>
          <Link to='/donate' className={isLinkActive('/donate') ? 'active' : ''}>DONATE</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}><p className='menu-text'>Close</p>
            <FaTimes />
          </button>
        </nav>
      </div>
      <button className='nav-btn nav-btn-open' onClick={showNavbar}><p className='menu-text'>Menu</p>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;