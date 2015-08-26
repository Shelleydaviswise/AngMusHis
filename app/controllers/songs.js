
app.controller("SongCtrl", function($scope,$q) {
  $scope.theSong ="";
  $scope.allSongsArray=[];

  $scope.newSong = {
    title: "",
    artist: "",
    album: ""
  };

 $scope.killSong = function(song) {
    var songIndex = $scope.allSongsArray.indexOf(song);
    if (songIndex >= 0) {
      $scope.allSongsArray.splice(songIndex, 1);
    }
  };

  $scope.addSong = function() {
    $scope.allSongsArray.push({
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


  function getSongs() {
    var deferred = $q.defer();

    $.ajax({
       url:"data/songs.json"
    })
    .done(function(response){
      deferred.resolve(response);
    })
    .fail(function(xhr, status, error){
      deferred.reject(error);
    });
  return deferred.promise;

  }

  getSongs()
    .then(
      function(promiseResolutionData){
        for (var i = 0; i < promiseResolutionData.mymusic.length; i++){
          $scope.allSongsArray.push(promiseResolutionData.mymusic[i]);
          console.log($scope.allSongsArray);
        }
        console.log(promiseResolutionData);
      },

     function(error){
      console.log("error", error);
     });


function getMoreSongs() {
    var deferred = $q.defer();

    $.ajax({
       url:"data/songs2.json"
    })
    .done(function(response){
      deferred.resolve(response);
    })
    .fail(function(xhr, status, error){
      deferred.reject(error);
    });
  return deferred.promise;

  }
  getMoreSongs()
    .then(
      function(promiseResolutionData){
        for (var i = 0; i < promiseResolutionData.mymusic.length; i++){
          $scope.allSongsArray.push(promiseResolutionData.mymusic[i]);
        }
      },
      function(error){
        console.log("error", error);
      });
});
 

