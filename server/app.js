const db = require('./db/index.js');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
let app = express();
const cors = require('cors');


module.exports.app = app;

const port = 3000;

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

app.get('/NCInshore', (req, res) => {
  db.query('select * from ncfish order by random() limit 4;')
    .then((result) => {
      res.status(200).json(result.rows)
    })
    .catch((err) => {
      console.log(err);
    })
});