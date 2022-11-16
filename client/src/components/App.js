import React, { useState, useEffect } from 'react';
import Router from './Router.js';
const axios = require('axios');
import { BrowserRouter } from 'react-router-dom';
const App = () => {

  // Login/user state
  const [userAuth, getUserAuth] = useState({username: '', password: ''});
  const [authorized, authorizeUser] = useState(false);
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
      alert (` invalid password needs:
         a lower-cased letter
         an upper-cased letter
         an integer
         a special character: ${chars}
      `);
      return false;
    }
  }

  // check if username is valid
  const validUsername = () => {
    if (userAuth.username.length >= 2) {
      return true;
    } else {
      alert (`invalid username:
      needs to be at least 2 characters long`);
      return false;
    }
  }


  // authorize user
  const userLogin = () => {
    if (validUsername() && validPassword()) {
      authorizeUser(true);
    }
  }

  // new user register
  const userRegister = () => {
    if (validUsername() && validPassword()) {
      checkIfExists();
      console.log('alreadyRegistered:', alreadyRegistered);
      // if (alreadyRegistered) {
      //   alert('user already exists');
      // } else {
      // // //   axios({
      // // //     method: 'post',
      // // //     url: '/register',
      // // //     data: userAuth
      // // //   })
      // // //   .then((res) => {
      // // //     if (res.data.command === 'INSERT') {
      // // //       alert('You\'re now registered!');
      // // //       userLogin();
      // // //     }
      // // //   })
      // // //   .catch((err) => {
      // // //       throw err;
      // // //   })
      // console.log('ERROR: should update alreadyRegistered state to TRUE and invoke ALERT')
      // }
    }
  }

  // check if username is already registered
  const checkIfExists = () => {
    axios({
      method: 'get',
      url: '/users',
      params: userAuth
    })
    .then((res) => {
      console.log(res.data.length)
      if (res.data.length) {
        console.log('res.data.length', res.data.length);
        const userFoundPromise = () => new Promise((res, rej) => {res(userExists(true))})
        userFoundPromise()
          .then(() => {
            alreadyRegistered && alert('user already exists');
          })
      } else {
        const userNotFoundPromise = () => new Promise((res, rej) => {res(userExists(false))})
        userNotFoundPromise()
          .then(() => {
            console.log('alreadyRegistered:', alreadyRegistered);
            alert('WELCOME');
          })
      }
    })
    .catch((err) => {
      throw err;
    })
  }

/*
  const checkIfExists = async () => {
    const res = await axios({
      method: 'get',
      url: '/users',
      params: userAuth
    })

    return !!res.data.length; // convert fetch result to boolean
}

// then call checkIfExists in userRegister
const userRegister = async () => {
    if (validUsername() && validPassword()) {
      const alreadyRegistered = await checkIfExists();
      if (alreadyRegistered) {
        alert('user already exists');
      } else {
        console.log('ERROR: should update alreadyRegistered state to TRUE and invoke ALERT')
      }
    }
  }
*/
  return (
    <div id='app'>
      <BrowserRouter>
      <Router userAuth={userAuth} getUserAuth={getUserAuth} userLogin={userLogin} authorized={authorized} userRegister={userRegister} />
      </BrowserRouter>
    </div>
  );
}

export default App;