import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Footer } from'../Imports.js';

const Login = ({ userAuth, getUserAuth, userLogin }) => {
  console.log('userAuth:', userAuth);
  return (
    <div id='login'>
      <NavBar/>
      <section id='login-main'>
        <form>
          <input type='text' placeholder='username' onChange={() => {getUserAuth({...userAuth, username: event.target.value})}}/>
          <input type='text' placeholder='password'onChange={() => {getUserAuth({...userAuth, password: event.target.value})}}/>
          <input type='submit' value='Submit' onClick={() => {event.preventDefault(); userLogin()}}/>
        </form>
      </section>
      <Footer/>
    </div>
  )
};

export default Login;