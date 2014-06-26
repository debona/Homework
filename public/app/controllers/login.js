'use strict';

angular.module('homework').controller('LoginController', ['$scope', '$state', 'auth', 'notificationCenter',
	function($scope, $state, auth, notificationCenter) {
		$scope.user = {};

		$scope.tryOAuthLogin = function tryOAuthLogin() {
			auth.login('oauth', 'password');

			if (auth.isAuthenticated()) {
				notificationCenter.display('Bienvenue ' + auth.user.name + '. (connecté avec : OAuth)', 'success');
				$state.go('activity');
			} else {
				notificationCenter.display('Connexion impossible avec ces identifiants', 'warning');
			}
		};

		$scope.tryLogin = function tryLogin() {
			var hasError = $scope.loginForm.login.$error.email;
			if (!hasError && $scope.user.login && $scope.user.password) {
				auth.login($scope.user.login, $scope.user.password);
			}

			if (auth.isAuthenticated()) {
				notificationCenter.display('Bienvenue ' + auth.user.name + '. (connecté avec : ' + auth.user.email + ')', 'success');
				$state.go('activity');
			} else {
				notificationCenter.display('Connexion impossible avec ces identifiants', 'warning');
			}
		};
	}
]);
