import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from'../NavBar.js';

const Login = () => {
  return (
    <div id='login'>
      <NavBar/>
      <form id='login-form'>
        <input type='text' placeholder='username'/>
        <input type='text' placeholder='password'/>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
};

export default Login;