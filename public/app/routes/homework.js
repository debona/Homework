'use strict';

angular.module('homework').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: '/app/views/index.html'
		}).state('activity', {
			url: '/activity',
			templateUrl: '/app/views/activity.html'
		}).state('login', {
			url: '/login',
			templateUrl: '/app/views/login.html'
		}).state('logout', {
			url: '/logout',
			templateUrl: '/app/views/logout.html'
		});
	}
]).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);
