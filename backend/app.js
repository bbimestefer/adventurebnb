//imports all of the packages that you need
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

// this checks if it is in productoin or not by checking the index.js file
const { environment } = require('./config');
const isProduction = environment === 'production';

// initialize express
const app = express();
// connect morgan middleware
app.use(morgan('dev'));
// parse cookies
app.use(cookieParser());
//parsing JSON
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    // CORS isn't needed in production since all of our React and Express resources will come from the same origin
    app.use(cors());
  }
// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
      policy: "cross-origin"
    })
  );

  // Set the _csrf token and create req.csrfToken method
  // configure it to use cookies
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );


app.use(routes); // Connect all the routes

module.exports = app;
