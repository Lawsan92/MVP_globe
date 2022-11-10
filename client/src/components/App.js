import React, { useState } from 'react';
import Router from './Router.js';

const App = () => {

  // Login state
  const [userAuth, getUserAuth] = useState({username: '', password: ''});
  const [authorized, authorizeUser] = useState(false);

  const userLogin = () => {
    if (userAuth.username.length > 3 && userAuth.password.length) {
      authorizeUser(true);
    }
  }

  return (
    <div id='app'>
      <Router userAuth={userAuth} getUserAuth={getUserAuth} userLogin={userLogin}/>
    </div>
  );
}

export default App;