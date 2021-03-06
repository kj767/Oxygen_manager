var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config=require('./config');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
var app = express();
var authenticate=require('./authenticate');
const passport=require('passport');
var stateRouter=require('./routes/state');
const url=config.mongoUrl;
var supplyRouter=require('./routes/supply');
var dashboardRouter = require('./routes/dashboard');

// view engine setup
mongoose.connect(url,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
})
.then((db)=>{
  console.log("Connected to Database");
}

);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
//app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/state', stateRouter);
app.use('/supply', supplyRouter);
app.use('/dashboard', dashboardRouter);


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
app.get('*', function(req, res) { // To server static files to the users

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


module.exports = app;
