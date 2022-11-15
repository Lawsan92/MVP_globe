const { Client } = require('pg');

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

const getUser = (user) => {
  const query = 'select * from users where username=($1)';
  const values = [user.username];
  return client.query(query, values)
};

const addUser = (user) => {
  return client.query(`insert into users (username, password) values ('${user.username}', '${user.password}')`)
}

module.exports = { getData, getUser, addUser };