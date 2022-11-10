import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from'../NavBar.js';

const Login = ({ userAuth, getUserAuth }) => {
  console.log('userAuth:', userAuth);
  return (
    <div id='login'>
      <NavBar/>
      <form id='login-form'>
        <input type='text' placeholder='username' onChange={() => {getUserAuth({...userAuth, username: event.target.value})}}/>
        <input type='text' placeholder='password'onChange={() => {getUserAuth({...userAuth, password: event.target.value})}}/>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
};

export default Login;