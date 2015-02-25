// this is our server.js file

// require express so that we can build an express app
var express = require('express');
// require path so we can use path stuff like path.join
var path = require('path');

// create the express app
// express is a set of tools that allows us to more easily deal with http actions and some other stuff involving setting variables and getting them
var app = express();

// so that we can parse post data through the req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// sets up a static file server that points to the client directory
app.use(express.static(path.join(__dirname, 'client')));

var mongoose = require('./config/mongoose.js');

var routes = require('./config/routes.js')(app);

// starts listening
app.listen(8000, function() {
	console.log('cool stuff on: 8000');
})


