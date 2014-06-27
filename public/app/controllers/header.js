'use strict';

angular.module('homework').controller('HeaderController', ['$scope', '$state', 'auth', 'notificationCenter',
	function($scope, $state, auth, notificationCenter) {
		$scope.auth = auth;
		$scope.logout = function logout() {
			auth.logout();
			notificationCenter.display('Vous êtes maintenant déconnecté.');
		};
	}
]);
