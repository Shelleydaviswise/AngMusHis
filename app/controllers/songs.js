
app.controller("SongCtrl", function($scope,$q) {
  $scope.theSong ="";


  $scope.newSong = {
    title: "",
    artist: "",
    album: ""
  };



 $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };


  $scope.addSong = function() {
    $scope.songs.push({
      title: $scope.newSong.title,
      artist: $scope.newSong.artist,
      album: $scope.newSong.album
    });

    $scope.newSong = {
    title: " ",
    artist: " ",
    album: " "
    };
  };

  function getSongList(){
   return $q(function(resolve,reject){

     $.ajax({
       url:"../../data/songs.json"
     })
     .done(function(response){
       resolve(response.songs);
     })
     .fail(function(xhr, status, error){
       reject(error);
     });
   });
 }

   getSongList()
   .then(
     function(promiseResolutionData){
     $scope.songs = promiseResolutionData;
     },
     function(error){
     console.log("error", error);
     });
});
 

