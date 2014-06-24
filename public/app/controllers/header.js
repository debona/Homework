'use strict';

angular.module('homework').controller('HeaderController', ['$scope', '$state',
    function($scope, $state) {
        $scope.isActive = function (state) {
            return state === $state.current.name;
        };
    }
]);
