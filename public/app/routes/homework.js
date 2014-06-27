'use strict';

angular.module('homework').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		var requireAuth = function requireAuth($q, auth, notificationCenter) {
			var deferred = $q.defer();

			if (auth.isAuthenticated()) {
				deferred.resolve();
			} else {
				deferred.reject();
				notificationCenter.display('Vous devez être connecté pour accéder à cette page.', 'warning');
			}

			return deferred.promise;
		};

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: '/app/views/index.html'
		}).state('activity', {
			url: '/activity',
			templateUrl: '/app/views/activity.html',
			resolve: { requireAuth: requireAuth }
		}).state('login', {
			url: '/login',
			templateUrl: '/app/views/login.html'
		});
	}
]).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);
