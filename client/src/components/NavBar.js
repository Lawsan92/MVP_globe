import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>  {

  return (
    <div id='nav-bar'>
      <div id='logo'></div>
      {/* <div id='search-bar'>
        <input type='text' placeholder='search...'></input>
        <button id='search-button' onClick={() => {alert('clicked!')}}>
          <img id ='mag' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1666116514/samples/magnifying-glass-svgrepo-com_nflk4y.svg'></img>
        </button>
      </div> */}
      <div id='nav-links'>
      <Link to='/' id='link' className='link-login'>
          <p>Home</p>
        </Link>
        <Link to='/login' id='link' className='link-login'>
          <p>Login</p>
        </Link>
      </div>
    </div>
  )
};

export default NavBar;