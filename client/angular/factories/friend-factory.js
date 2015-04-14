// creates a factory on the fullMeanDemo application and gives it access to $http
fullMeanDemo.factory('FriendFactory', function($http) {
	// create a factory object which is our object to return
	var factory= {};
	// have an array of friends to keep track of our data on the client side WOOHOO for client side frameworks!!!
	var friends = [];
	// sends an http request to get all of the friends and then pass it back to the controller
	factory.getFriends = function(callback) {
		// $http is a service that allows us to make an ajax call and it has a success event
		$http.get('/friends').success(function(resdata) {
			// set up our array to keep track of friends
			friends = resdata;
			// pass friends via callback to whatever called the factory.getFriends method
			callback(friends);
		})
	}
	factory.addFriend = function(friend_to_add, callback) {
		$http.post('/friends', {name: friend_to_add.name, age: friend_to_add.age}).success(function(somedata) {
			friends.push({name: friend_to_add.name, age: friend_to_add.age})
			callback(friends);
		})
		// friends.push({name: friend_to_add.name, age: friend_to_add.age})
		// callback(friends);
	}
	return factory;
})