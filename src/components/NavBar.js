import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/global.css";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/dark_resized2.png'

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <div className='header-container'>
        <img src={Logo} alt='Logo' />
        <nav ref={navRef}>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/adopt'>ADOPT</Link>
          <Link to='/donate'>DONATE</Link>
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