var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routes 
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var comedianRouter = require('./routes/comedian');
var comediansRouter = require('./routes/comedians');
var clubRouter = require('./routes/club');
var clubsRouter = require('./routes/clubs');
var showRouter = require('./routes/show');
var showsRouter = require('./routes/shows');

var app = express();

const { database } = require('./src/database');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/comedian',comedianRouter);
app.use('/comedians',comediansRouter);
app.use('/club',clubRouter);
app.use('/clubs',clubsRouter);
app.use('/show',showRouter);
app.use('/shows',showsRouter);

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
