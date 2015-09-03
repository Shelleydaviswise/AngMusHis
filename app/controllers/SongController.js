app.controller("SongCtrl", 
  ["$scope",
  "$firebaseArray",
  function($scope, $firebaseArray) {
  // $scope.theSong ="";


  var ref = new Firebase("https://torrid-torch-3031.firebaseio.com/songs");

  // download the data into a local object
  $scope.allSongsArray = $firebaseArray(ref);
  


   $scope.killSong = function(oneSong) {
      $scope.allSongsArray.$remove(oneSong);
    };
  
}]);
 

