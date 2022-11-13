import React, { useState } from 'react';
import Router from './Router.js';
const axios = require('axios');

const App = () => {

  // Login state
  const [userAuth, getUserAuth] = useState({username: '', password: ''});
  const [authorized, authorizeUser] = useState(false);

  //user state
  const [alreadyRegistered, userExists] = useState(false);

  // check if password is valid
  const validPassword = () => {
    const password = userAuth.password;
    const [lowerAlpha, upperAlpha, nums, chars ] =
    ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', "01234567890", '!@#$%^&*()'];
    let [check1, check2, check3, check4] = [0, 0, 0, 0];
    for (let char of password) {
      lowerAlpha.indexOf(char) > - 1 && check1 ++;
      upperAlpha.indexOf(char) > - 1 && check2 ++;
      nums.indexOf(char) > - 1 && check3 ++;
      chars.indexOf(char) > - 1 && check4 ++;
    };

    if (check1 && check2 && check3 && check4) {
      return true;
    } else {
      alert ('Invalid Password...check console');
      console.log(` needs:
         a lower-cased letter
         an upper-cased letter
         an integer
         a special character: ${chars}
      `);
      return false;
    }
  }

  // authorize user
  const userLogin = () => {
    if (userAuth.username.length >= 2 && validPassword()) {
      authorizeUser(true);
    }
  }

  // new user register
  const userRegister = () => {
    checkIfExists();
    if (alreadyRegistered) {
      alert('user already exists');
    } else {
      axios({
        method: 'post',
        url: '/register',
        data: userAuth
      })
      .then((res) => {
        if (res.data.command === 'INSERT') {
          alert('You\'re now registered!');
          userLogin();
        }
      })
      .catch((err) => {
        throw err;
      })
    }
  }

  // check if username is already registered
  const checkIfExists = () => {
    if (userAuth.username.length >= 2 && validPassword()) {
      axios({
        method: 'get',
        url: '/users',
        params: userAuth
      })
      .then((res) => {
        console.log(res.data.length)
        if (res.data.length) {
          userExists(true);
        }
      })
      .catch((err) => {
        throw err;
      })
    } else {
      return;
    }
  }

  return (
    <div id='app'>
      <Router userAuth={userAuth} getUserAuth={getUserAuth} userLogin={userLogin} authorized={authorized} userRegister={userRegister} />
    </div>
  );
}

export default App;