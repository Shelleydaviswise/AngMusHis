

app.controller("SongDetailCtrl", 
["$scope", "$q","song-storage", 
  function($scope,$q, $routeParams, song_storage ) {

  $scope.allSongsArray=[];
  $scope.id=$routeParams.songId
  
    song_storage.then(
      function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
      $scope.allSongsArray = promiseResolutionData;
      },
      function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
      }
    );
  }
]);
 

