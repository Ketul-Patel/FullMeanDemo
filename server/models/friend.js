// we want to create a file that has the schema for our friends

var mongoose = require('mongoose');

// create a schema for our friends
var FriendSchema = new mongoose.Schema({
	name: String,
	age: Number
})

// create the model using that schema
// console.log("just created the model")
mongoose.model('Friend', FriendSchema)