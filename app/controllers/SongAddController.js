
app.controller("SongAddCtrl", 
    ["$scope",
    "$firebaseArray",
    function($scope, $firebaseArray) {
        var ref = new Firebase("https://torrid-torch-3031.firebaseio.com/songs");
  // download the data into a local object
      $scope.allSongsArray= $firebaseArray(ref);
    
      $scope.newSong = {};


    $scope.addSong = function() {
      $scope.allSongsArray.$add({
        title: $scope.newSong.title,
        artist: $scope.newSong.artist,
        album: $scope.newSong.album
      });
      $scope.newSong = "";
    };
  }]
);

