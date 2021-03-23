var express = require('express');
var app = express()
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
require('dotenv').config();
var IndexRoute = require('./route/indexroutes');
var cors = require('cors');

//dependencies

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(cors());
app.use(cookieParser());
app.use('/users',IndexRoute)
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;