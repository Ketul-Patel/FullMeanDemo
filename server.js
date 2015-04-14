// requires express
var express = require('express');
// requires path so we can do pathy stuff
var path = require('path');
// invoke express to create an application
var app = express();

// allows us to handle post data from http requests
var bodyParser = require('body-parser');
// for regular post requests
app.use(bodyParser.urlencoded());
// for post requests that want json back
app.use(bodyParser.json());

// sets up a static file server
app.use(express.static(path.join(__dirname, 'client')));

// require mongoose config
require('./config/mongoose.js');

// requires the routes file
require('./config/routes.js')(app);

// listens
app.listen(8000, function() {
	console.log('cool stuff on: 8000');
})


