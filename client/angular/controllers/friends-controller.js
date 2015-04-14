// creates the FriendsController and gives it access to $scope and FriendFactory
fullMeanDemo.controller('FriendsController', function($scope, FriendFactory) {
	// calling the updateFriends function
	updateFriends();
	// calls upon the factory to getFriends
	function updateFriends() {
		// FriendFactory getFriends method that takes one parameter which is a LIST OF INSTRUCTIONS on what to do with the friends that you get
		FriendFactory.getFriends(function(output) {
			// only set $scope once we get friends back
			$scope.friends = output;
		});
	}

	$scope.addfriend = function() {
		FriendFactory.addFriend($scope.new_friend, function(data) {
			console.log('were back', data);
			$scope.friends = data;
			$scope.new_friend = {};
		})		
	}

})