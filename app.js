// Basic configurations
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

// connect to database mongodb
mongoose.connect('mongodb://localhost:27017/db_user');

// Configure app to use bodyParser()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// REGISTER OUR ROUTES
var apiRouter = require('./app/routes.js')(app, express);
app.use('/api/v1', apiRouter);


// START THE SERVER
app.listen(port);
console.log('Server http://localhost:' + port);
