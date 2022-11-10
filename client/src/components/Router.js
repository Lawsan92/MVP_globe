import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Login from './pages/Login.js'

const Router = ({ userAuth, getUserAuth, userLogin }) => {
  return (
    <Routes>
      <Route path='/' element={ <Home userAuth={userAuth} getUserAuth={getUserAuth} /> }/>
      <Route path='/login' element={ <Login userAuth={userAuth} getUserAuth={getUserAuth} userLogin={userLogin} /> }/>
    </Routes>
  );
};

export default Router;