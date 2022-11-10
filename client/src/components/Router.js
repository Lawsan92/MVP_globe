import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import App from './App.js';
import Login from './pages/Login.js'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <App/> }></Route>
      <Route path='/login' element={ <Login/> }></Route>
    </Routes>
  );
};

export default Router;