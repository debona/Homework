'use strict';

angular.element(document).ready(function() {
    angular.bootstrap(document, ['homework']);
});

angular.module('homework', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'google-maps']);
