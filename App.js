require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routes = require('./api/routes');

const app = express();

// Route logging
app.use(morgan('dev'));

// Static route
app.use('/uploads', express.static('uploads'));

// Handle cors errors
app.use(cors());

// Pars body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    console.log('Connection to MongoDB successful');
  })
  .catch(err => {
    console.log('Connection to MongoDB failed', err);
  });

// Handle Routes
app.use('/', routes);

// Handle Errors
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
