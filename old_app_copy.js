var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var fs = require('fs');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();


const SerialPort          = require('serialport').SerialPort;
const { DelimiterParser } = require('@serialport/parser-delimiter');
var port = new SerialPort(
  { 
    path: 'COM3', 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
  }
);

const parser = port.pipe(new DelimiterParser({ delimiter: '\n' }));

parser.on('open', function() {
  console.log('u hap!');
});
parser.on('data', function(data) {
  
  console.log(data);
  console.log(data.toString());
});

parser.on('error', function(err) {
  console.log(err);
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
