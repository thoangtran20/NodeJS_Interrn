const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = 3000;


// Static Directory
app.use(express.static(path.join(__dirname, 'public')))
// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// HTTP logger
app.use(morgan('combined'));

app.get('/home', (req, res) => {
  res.render('pages/home');
});

app.get('/course', (req, res) => {
  res.render('pages/course');
});

app.get('/teacher', (req, res) => {
  res.render('pages/teacher');
});

app.get('/price', (req, res) => {
  res.render('pages/price');
});

app.get('/review', (req, res) => {
  res.render('pages/review');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.get('/login', (req, res) => {
  res.render('pages/login');
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});