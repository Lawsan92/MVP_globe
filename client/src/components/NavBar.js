import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>  {

  return (
    <div id='nav-bar' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div id='logo'></div>
      <div id='search-bar' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input type='text' placeholder='search...'></input>
        <button id='search-button' onClick={() => {alert('clicked!')}}>
          <img id ='mag' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1666116514/samples/magnifying-glass-svgrepo-com_nflk4y.svg'></img>
        </button>
        <Link to='/login' id='link'>Login</Link>
      </div>

    </div>
  )
};

export default NavBar;