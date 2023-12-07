import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/global.css";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/dark_resized2.png'
import LoginModal from './LoginModal/LoginModal';

const NavBar = ({ isAdmin, setIsAdmin, showLogIn, showLogOut, setShowLogIn, setLogOut }) => {
  const navRef = useRef();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check localStorage on component mount and update isAdmin and showLogOut state
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const storedShowLogOut = localStorage.getItem('showLogOut');

    if (storedIsAdmin) {
      setIsAdmin(true);
    }

    if (storedShowLogOut) {
      setLogOut(true);
      setShowLogIn(false);
    }
  }, [setIsAdmin, setLogOut, setShowLogIn]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const isLinkActive = (to) => {
    return location.pathname === to;
  }

  const handleLogin = () => {
    setShowLogIn(true)
    setLogOut(false)
    setIsOpen(true)

    localStorage.setItem('isAdmin', true);
    localStorage.setItem('showLogOut', true);
  }

  const handleLogOut = () => {
    setShowLogIn(true)
    setLogOut(false)
    setIsOpen(false)
    setIsAdmin(false)

    localStorage.removeItem('isAdmin');
    localStorage.removeItem('showLogOut');
  }

  return (

    <>
      <header>
        <div className='header-container'>
          <img src={Logo} alt='Logo' />
          <nav ref={navRef}>
            <Link to='/' className={isLinkActive('/') ? 'active' : ''}>HOME</Link>
            <Link to='/about' className={isLinkActive('/about') ? 'active' : ''}>ABOUT</Link>
            <Link to='/adopt' className={isLinkActive('/adopt') ? 'active' : ''}>ADOPT</Link>
            <Link to='/donate' className={isLinkActive('/donate') ? 'active' : ''}>DONATE</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}><p className='menu-text'>Close</p>
              <FaTimes />
            </button>


            {isAdmin && (
              <Link to='/admin' className={isLinkActive('/admin') ? 'active' : ''}>ADMIN</Link>
            )}


            {showLogIn && (
              <button id="signIn" className="signin-btn" onClick={handleLogin}>LOGIN</button>
            )}

            {showLogOut && (
              <button id="signOut" className="signin-btn" onClick={handleLogOut}>LOGOUT</button>
            )}

          </nav>
        </div>
        <button className='nav-btn nav-btn-open' onClick={showNavbar}><p className='menu-text'>Menu</p>
          <FaBars />
        </button>
      </header>

      {isOpen && (
        <LoginModal
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          showLogin={showLogIn}
          setShowLogIn={setShowLogIn}
          showLogOut={showLogOut}
          setLogOut={setLogOut}
          setIsOpen={setIsOpen}
        />
      )}
    </>



  );
}

export default NavBar;