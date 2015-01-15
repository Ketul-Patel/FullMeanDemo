// make the factory call it FriendFactory and pass it a callback function telling us that we are going to use $http functionality
fullMeanDemo.factory('FriendFactory', function($http) {
	var factory= {};
	var friends = [];
	// get all friends from the backend pass it a callback function so we can make things run synchronously 
	factory.getFriends = function(callback) {
		// send a get request to the url '/friends_json'
		$http.get('/friends_json').success(function(output) {
			friends = output;
			console.log(friends)
			// we run a callback so that the controller can do things synchronously
			callback(friends);
		})
	}

	// adding a friend via the server/db
	factory.addNewFriend = function(info, callback) {
		$http.post('/friends/new', {name: info.name, age: info.age}).success(function(data) {
			console.log(data);
			friends.push({name: info.name, age: info.age});
			callback();
		})
		
	}
	return factory;
})