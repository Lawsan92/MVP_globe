// ----- external modules -----
require('dotenv').config();
const express = require('express');
const path = require('path');
const { getData, getUser, addUser } = require('./db/postgres.js');

const app = express();

// ----- Middleware -----
app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get('/planet', (req, res) => {
  console.log('req:', req.query);
  if (req.query.name) {
  getData(req.query)
    .then((data) => {
      console.log('data:', data.rows);
      res.send(data.rows);
    })
  }
});

// check if user exists
app.get('/users', (req, res) => {
  console.log('req.body:', req.query)
  getUser(req.query)
  .then((response) => {
    console.log('response.rows:', response.rows);
    res.send(response.rows);
  })
  .catch((err) => {
    if (err) {
      throw err;
    }
  });
});

// register user
app.post('/register', (req, res) => {
  addUser(req.body)
  .then((response) => {
    res.send(response);
  })
  .catch((err) => {
    if (err) {
      throw err;
    }
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('can\'t connect to port...:', err);
  } else {
    console.log(`connected to localhost:${process.env.PORT}...`);
  }
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  })
})