import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar(props) {

  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100)
        handleShow(true);
      
      else
        handleShow(false);
    });
  
    return () => {
      
    };
  }, []);
  
  return (
    <div className={show ? 'navbar nav-black' : 'navbar nav-fade'}>
      <img
        className='nav-logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="logo" />
      <Link to='/'className='nav-items'><span>Home</span></Link>
      <Link to='/movie' className='nav-items'><span>Movies</span></Link>
      <Link to='/tv' className='nav-items'><span>TV Series</span></Link>
      <Link to='/popular' className='nav-items'><span>New & Popular</span></Link>
    </div>
  )
}

export default Navbar;