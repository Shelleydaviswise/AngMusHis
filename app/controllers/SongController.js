
app.controller("SongCtrl", 
["$scope", "$q","song-storage", 
  function($scope, $q, song_storage ) {
  // $scope.theSong ="";
  $scope.allSongsArray=[];
 
  
  
   $scope.killSong = function(oneSong) {
      var songIndex = $scope.allSongsArray.indexOf(oneSong);
      if (songIndex >= 0) {
        $scope.allSongsArray.splice(songIndex, 1);
      }
    };
  

   song_storage.then(
    function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
      $scope.allSongsArray = promiseResolutionData;
    },
    function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });
    
  //   function getSongs() {
  //     var deferred = $q.defer();
  
  //     $.ajax({
  //        url:"data/songs.json"
  //     })
  //     .done(function(response){
  //     deferred.resolve(response);
  //   })
  //   .fail(function(xhr, status, error){
  //     deferred.reject(error);
  //   });
  // return deferred.promise;

  // }

//   getSongs()
//     .then(
//       function(promiseResolutionData){
//         for (var i = 0; i < promiseResolutionData.mymusic.length; i++){
//           $scope.allSongsArray.push(promiseResolutionData.mymusic[i]);
//           console.log($scope.allSongsArray);
//         }
//         console.log(promiseResolutionData);
//       },

//      function(error){
//       console.log("error", error);
//      });


// function getMoreSongs() {
//     var deferred = $q.defer();

//     $.ajax({
//        url:"data/songs2.json"
//     })
//     .done(function(response){
//       deferred.resolve(response);
//     })
//     .fail(function(xhr, status, error){
//       deferred.reject(error);
//     });
//   return deferred.promise;

//   }
//   getMoreSongs()
//     .then(
//       function(promiseResolutionData){
//         for (var i = 0; i < promiseResolutionData.mymusic.length; i++){
//           $scope.allSongsArray.push(promiseResolutionData.mymusic[i]);
//         }
//       },
//       function(error){
//         console.log("error", error);
//       });
}]);
 

