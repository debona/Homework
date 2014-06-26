'use strict';

angular.module('homework').controller('ActivityController', ['$scope', 'auth',
	function($scope, auth) {
		$scope.recentActivities = auth.user.recentActivities.sort( function (item, nextItem) {
			return item.date < nextItem.date;
		});

		$scope.selectedActivity = $scope.recentActivities[0];
		$scope.select = function select(activity) {
			$scope.selectedActivity = activity;
		}
		$scope.scale = 11;
	}
]);
