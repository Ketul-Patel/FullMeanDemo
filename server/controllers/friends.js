// require mongoose so that we can load the friend model
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// what are we exporting?
// export an object that has our methods to run for the routes file
module.exports = {
		// methods that we are going to run called upon by the routes file and calls upon the model
		show: function(req, res) {
			console.log("we're in the show method")
			// finds all of our friends and we pass the function a callback on what to do after
			Friend.find({}, function(err, results) {
				if(err) {
					console.log(err)
				}
				console.log(results)
				res.send(JSON.stringify(results));
			})
		},
		add: function(req, res) {
			var new_friend = new Friend({name: req.body.name, age: req.body.age});
			new_friend.save(function(err) {
				if(err) {
					console.log('oops something went wrong');
				} else {
					console.log('nope');
					res.end();
				}
			})
		}
	}
