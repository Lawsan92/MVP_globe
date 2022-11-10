import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Login from './pages/Login.js'

const Router = ({ userAuth, getUserAuth }) => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/login' element={ <Login userAuth={userAuth} getUserAuth={getUserAuth} /> }/>
    </Routes>
  );
};

export default Router;