'use strict';

angular.module('homework').controller('LoginController', ['$scope', '$state',
	function($scope, $state) {
		$scope.user = {};

		$scope.tryLogin = function tryLogin() {
			var hasError = $scope.loginForm.login.$error.email;
			if (!hasError && $scope.user.login && $scope.user.password) {
				$state.go('activity')
			}
		};
	}
]);
