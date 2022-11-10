// ----- external modules -----
require('dotenv').config();
const express = require('express');
const path = require('path');
const {getData} = require('./db/postgres.js');

const app = express();
app.get('/planet', (req, res) => {
  console.log('req:', req.query);
  if (req.query.name) {
  getData(req.query)
    .then((data) => {
      console.log('data:', data.rows);
      res.send(data.rows);
    })
  }
  // res.status(200).send('Hello');
});
// ----- Middleware -----
app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/dist")));

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