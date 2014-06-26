'use strict';

angular.module('homework').factory('auth', function() {
	var defaultName = 'John Doe';
	var randomActivity = function randomActivity(){
		var today = new Date();
		var browsers = ['chrome', 'opera', 'firefox', 'safari'];

		return {
			date:    new Date(today.getTime() - _.random(0, 60*60*24*7*1000)),
			browser: browsers[_.random(0, browsers.length -1)],
			ip:      _.random(12, 250) + '.' + _.random(12, 250) + '.' + _.random(12, 250) + '.' +_.random(12, 250),
			location: {
				latitude:  48.8589437 + Math.random() * 0.08 - 0.04,
				longitude: 2.3452575 + Math.random() * 0.16 - 0.08
			}
		};
	};
	var randomActivities = function randomActivities(length) {
		var activities = [];
		for (var i = 0; i < length; i++) {
			activities.push(randomActivity());
		}
		return activities;
	};

	this.user = null;

	this.isAuthenticated = function isAuthenticated(){
		return !!this.user;
	};

	this.login = function login(email, password){
		// authenticate in any case
		var user = {
			name: defaultName,
			email: email,
			recentActivities: randomActivities(10)
		};

		// TODO log this activity:
		// var thisActivity = {};
		// user.recentActivities.push(thisActivity);

		this.user = user;
	};

	this.logout = function logout(){
		this.user = null;
	};

	return this;
});
