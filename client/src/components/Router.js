import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Planets/Home.js';
import Login from './pages/Login.js'
import Landing from './pages/Home/Landing.js'

const Router = ({ userAuth, getUserAuth, userLogin, authorized, userRegister }) => {
  return (
    <Routes>
      <Route path='/planets' element={ <Home userAuth={userAuth} getUserAuth={getUserAuth} authorized={authorized} /> }/>
      <Route path='/' element={ <Landing /> }/>
      <Route path='/login' element={ <Login userAuth={userAuth} getUserAuth={getUserAuth} userLogin={userLogin}  authorized={authorized} userRegister={userRegister} /> }/>
    </Routes>
  );
};

export default Router;