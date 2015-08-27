var app = angular.module("SongApp", ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider) {
    $routeProvider
      .when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      }).
      when('/songs/addSong', {
        templateUrl: 'partials/add-songs.html',
        controller: 'SongAddCtrl'
      }).
      otherwise({
        redirectTo: '/songs'
      });
  }]);

	


