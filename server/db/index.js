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

client.query(`CREATE TABLE IF NOT EXISTS ncfish (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
  name varchar(30) NOT NULL,
  scientific varchar(40) NOT NULL,
  sizelimit varchar(40) NOT NULL,
  baglimit varchar(40) NOT NULL,
  season varchar(40),
  photos text ARRAY,
  aliases text ARRAY
);`);

module.exports = client;