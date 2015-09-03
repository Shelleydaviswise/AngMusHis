var app = angular.module("SongApp", ['ngRoute', 'firebase']);

app.config (['$routeProvider',
	function($routeProvider) {
    $routeProvider
      .when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/addSong', {
        templateUrl: 'partials/add-songs.html',
        controller: 'SongAddCtrl',
        controllerAs: 'add'

      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl',
        controllerAs: 'detail' 

      }).
      otherwise({
        redirectTo: '/songs'
      });
  }]);


	


