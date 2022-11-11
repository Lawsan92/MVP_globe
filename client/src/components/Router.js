import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Login from './pages/Login.js'

const Router = ({ userAuth, getUserAuth, userLogin, authorized }) => {
  return (
    <Routes>
      <Route path='/' element={ <Home userAuth={userAuth} getUserAuth={getUserAuth} authorized={authorized} /> }/>
      <Route path='/login' element={ <Login userAuth={userAuth} getUserAuth={getUserAuth} userLogin={userLogin}  authorized={authorized} /> }/>
    </Routes>
  );
};

export default Router;