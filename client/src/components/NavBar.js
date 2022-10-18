import React from 'react';

const NavBar = () =>  {

  return (
    <div id='nav-bar'>
      <h1>Navbar under construction...</h1>
      <div id='logo'></div>
      <div id='search-bar'>
        <input type='text' placeholder='search...'></input>
        <button id='search-button' onClick={() => {alert('clicked!')}}>
          <img id ='mag' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1666116514/samples/magnifying-glass-svgrepo-com_nflk4y.svg'></img>
        </button>
      </div>
      <div id='user'>
        <button>login</button>
        <button>signup</button>
      </div>
    </div>
  )
};

export default NavBar;