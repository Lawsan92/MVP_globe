import React, { useState } from 'react';
import Router from './Router.js';

const App = () => {

  const [userAuth, getUserAuth] = useState({username: '', password: ''});

  return (
    <div id='app'>
      <Router userAuth={userAuth} getUserAuth={getUserAuth}/>
    </div>
  );
}

export default App;