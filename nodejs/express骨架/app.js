var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
console.log("path.join(__dirname, 'views')", path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var requestTime2 = function (req, res, next) {
  req.requestTime = Date.now()
  console.log("requestTime21:", new Date())
 
  next()
  console.log("requestTime22:", new Date())

}
app.use(requestTime2)


var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  console.log("1:", new Date())
  res.end("DFDSFs111111")
 // next()
  console.log("23:", new Date())

}
app.use(requestTime)

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

var requestTime1 = function (req, res, next) {
  req.requestTime = Date.now()
  console.log("1AA:", new Date())
  next()
  console.log("2AA:", new Date())
}
app.use(requestTime1)


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("DDD")
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
