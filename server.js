var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Require Session
var session = require('express-session');
// Require Passport
var passport = require('passport');
// Require Method-Override
var methodOverride = require('method-override');

require('dotenv').config();

require('./config/database');
// Require Passport Config
require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/categories');
var budgetsRouter = require('./routes/budgets');
var aboutRouter = require('./routes/about');
var howtoRouter = require('./routes/howto');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mount Session
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// Mount Passport
app.use(passport.initialize());
app.use(passport.session());

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// Mount Method-Override
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', categoriesRouter);
app.use('/', budgetsRouter);
app.use('/', aboutRouter);
app.use('/', howtoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
