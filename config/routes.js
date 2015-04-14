// load the friends controller that we will then delegate to
var friends = require('./../server/controllers/friends.js');
module.exports = function(app) {
	// handling all of the http routes
	app.get('/friends', function(req, res) {
		// delegate to controllers
		friends.show(req, res);
	})
	app.post('/friends', function(req, res) {
		friends.add(req, res);	
	})
}