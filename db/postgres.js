const {Client} = require('pg');

const client = new Client ({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  database: 'Planets'
});

client.connect((error) => {
  if (error) {
    console.log('Can\'t connect to postgres!:', error);
  } else {
    console.log('Connect to postgres...');
  }
});

const addData = () => {
  return client.query(`select * from planet where name=name`)
}

const getData = ({name}) => {
  console.log('postgres:', name);
  if (name) {
  return client.query(`select * from planet where name='${name}'`)
}
};

module.exports = {getData};