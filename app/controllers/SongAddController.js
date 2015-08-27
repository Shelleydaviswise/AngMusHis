
app.controller("SongAddCtrl", 
["$scope","$q", 
  function($scope,$q) {
  $scope.allSongsArray=[];
  
  $scope.newSong = {
    id: "",
    title: "",
    artist: "",
    album: "",
    year: ""
  };

  $scope.addSong = function(){
    $scope.allSongsArray.push({
      id: $scope.newSong.id,
      title: $scope.newSong.title,
      artist: $scope.newSong.artist,
      album: $scope.newSong.album,
      year: $scope.newSong.year
    });
    $scope.newSong = "";
  };
   
}
]);