//app.js

var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes/index');
var db = require('./db');
var request = require('request');


var UserController = require('./user/UserController');
var ProjectController = require('./project/ProjectController');
app.use('/users', UserController);
app.use('/projects', ProjectController);
app.use('/', routes);

app.use(express.static(path.join(__dirname)));


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

module.exports = app;
