const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');
const port = 3000;

const route = require('./src/routes');
const db = require('./src/config/db');

// Connect to DB 
db.connect();

// Static Directory
app.use(express.static(path.join(__dirname, './src/public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// XMLHTTPRequest, fetch, axios 

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/resources/views'));

// Routes init
route(app);

// HTTP logger
app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

