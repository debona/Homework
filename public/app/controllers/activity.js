'use strict';

angular.module('homework').controller('ActivityController', ['$scope',
	function($scope) {
		$scope.randomizeActivity = function randomizeActivity(){
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

		$scope.randomize = function randomize(length) {
			var activities = [];
			for (var i = 0; i < length; i++) {
				activities.push($scope.randomizeActivity());
			}
			return activities;
		}

		$scope.recentActivities = $scope.randomize(10).sort( function (item, nextItem) {
			return item.date < nextItem.date;
		});

		$scope.selectedActivity = $scope.recentActivities[0];
		$scope.select = function select(activity) {
			$scope.selectedActivity = activity;
		}
		$scope.scale = 11;
	}
]);
