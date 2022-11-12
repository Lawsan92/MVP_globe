import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ userAuth, getUserAuth, authorized }) =>  {

 return !authorized ? (
    <div id='nav-bar'>
      <div id='logo'><img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1668059703/icons/Screen_Shot_2022-11-01_at_15.45.36_kzwlv1_sjvqta.svg'/></div>
      <div id='nav-links'>
        <p style={{marginRight: '10px'}}>Guest</p>
        <Link to='/' id='link' className='link-login'>
          <p>Home</p>
        </Link>
        <Link to='/login' id='link' className='link-login'>
          <p>Login</p>
        </Link>
      </div>
    </div>
  ) :
  (
    <div id='nav-bar'>
      <div id='logo'><img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1668059703/icons/Screen_Shot_2022-11-01_at_15.45.36_kzwlv1_sjvqta.svg'/></div>
      <div id='nav-links'>
        <p style={{marginRight: '10px'}} >{`Welcome ${userAuth.username} !`}</p>
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



    /* <div id='search-bar'>
        <input type='text' placeholder='search...'></input>
        <button id='search-button' onClick={() => {alert('clicked!')}}>
          <img id ='mag' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1666116514/samples/magnifying-glass-svgrepo-com_nflk4y.svg'></img>
        </button>
      </div> */

      /*


'Mercury', '4,756km (X 0.4 of Earth)', '6.08 X 10^10km^3 (X 0.06 of Earth)', '3.7 m/s^2 (X 0.4 of Earth) 67 million km.', '0.33 X 10^24 kg (0.06 of Earth)', '1st'

'Venus', '12,104km (X 0.9 of Earth)', '92.84 X 10^10km^3 (X 0.86 of Earth)', '8.9 m/s^2 (X 0.9 of Earth) 107 million km.', '4.87 X 10^24 kg (0.82 of Earth)', '2nd'
'Mars', '6,792km (X 0.15 of Earth)', '16.31 X 10^10km^3 (X 0.15 of Earth), '3.7 m/s^2 (X 0.4 of Earth) 209 million km.,0.62 X 10^24 kg (0.11 of Earth)', '4th'
'Saturn 120,536km (X 764 of Earth), '82,713 X 10^10km^3 (X 763 of Earth) 9.0 m/s^2 (X 0.9 of Earth) 1476.562 million km. 568 X 10^24 kg (X 95.1 of Earth)', '6th'
'Uranus 51,118km (X 4 of Earth)', '6,833 X 10^10km^3 (X 63.08 of Earth)', '8.7 m/s^2 (X 0.9 of Earth) 2945.715 million km. 86.8 X 10^24 kg (X 14.5 of Earth)', '7th'
'Neptune', '48,528km (X 3.9 of Earth)', '6,254 X 10^10km^3 (X 57.74 of Earth)', '11.0 m/s^2 (X 1.1 of Earth)', '4475.322 million km. 102 X 10^24 kg (X 17.1 of Earth)', '8th'
'Jupiter', '142,984km (X 1321 of Earth)', '142,128 X 10^10km^3(X 1321 of Earth)', '23.1 m/s^2 (X 2.4 of Earth)', '741 million km.', '1,898 X 10^24 kg^3 (X 317.8 of Earth)', '5th'

      */