angular.module('myApp')

.controller('mainController', function($scope){
  $scope.friends = [
    {
      name: 'Rick',
      birthday: 'January 4th'
    },
    {
      name: 'Morty',
      birthday: 'February 7th'
    },
    {
      name: 'Summer',
      birthday: 'March 28th'
    },
    {
      name: 'Jerry',
      birthday: 'August 10th'
    },
    {
      name: 'Beth',
      birthday: 'November 16th'
    },
    {
      name: 'Mr. Poopybutthole',
      birthday: 'December 5th'
    },
  ];

  $scope.addFriend = function(name, birthday){

    var newFriend = {
      name: name,
      birthday: birthday
    };

    $scope.friends.push(newFriend);

    $scope.newFriendName = '';
    $scope.newFriendBirthday = '';

  };

})
