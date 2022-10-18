const { readFile } = require('fs');

readFile('./client/src/components/MakeYourOwn.js', 'utf8', (err, res) => {
  if (err) {
    throw ('err:', err);
  } else {
    console.log('result:', res);
  }
});