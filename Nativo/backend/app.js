'use strict'
//Load library express
var express = require('express');
//Load library bodyParser
var bodyParser = require('body-parser');
//Load library express Routes and execute express
var app = express();

// Files.js Routes
var activitie_routes = require('./routes/activities');
//Middlewares layer before controller routes funtions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

//Routes */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
app.use('/api', activitie_routes)
//Export */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
module.exports = app;
