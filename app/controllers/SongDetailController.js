

app.controller("SongDetailCtrl", 
	["$routeParams", 
	"$firebaseObject",
  function($routeParams, $firebaseObject) {

    var ref = new Firebase("https://torrid-torch-3031.firebaseio.com/songs" + $routeParams.songId);
  // download the data into a local object
      this.songsDetail = $firebaseObject(ref);

  }]);
 

