const {Client, Pool} = require('pg');
require('dotenv').config();


const client = new Client({
  host: 'localhost',
  user: 'sunjuhwang',
  port: 5432,
  password: '',
  database: 'fishing'
});

// CONNECT TO DATABASE
client.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected to ' + client.database + ' as ' + client.user + ' on port ' + client.port);
});

// client.query(`CREATE TABLE ncfish IF NOT EXISTS`);

module.exports = client;