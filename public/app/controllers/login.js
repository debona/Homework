'use strict';

angular.module('homework').controller('LoginController', ['$scope', '$state', 'notificationCenter',
	function($scope, $state, notificationCenter) {
		$scope.user = {};

		$scope.tryOAuthLogin = function tryOAuthLogin() {
			notificationCenter.display('Bienvenue John Doe. (connecté avec : OAuth)', 'success');
			$state.go('activity');
		};

		$scope.tryLogin = function tryLogin() {
			var hasError = $scope.loginForm.login.$error.email;
			if (!hasError && $scope.user.login && $scope.user.password) {
				notificationCenter.display('Bienvenue John Doe. (connecté avec : ' + $scope.user.login + ')', 'success');
				$state.go('activity');
			} else {
				notificationCenter.display('Connexion impossible avec ces identifiants', 'warning');
			}
		};
	}
]);
