'use strict';

angular.module('homework').controller('NotificationController', ['$scope', 'notificationCenter',
	function($scope, notificationCenter) {
		$scope.notification = notificationCenter;
	}
]);
