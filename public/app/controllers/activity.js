'use strict';

angular.module('homework').controller('ActivityController', ['$scope',
    function($scope) {
      $scope.recentActivities = [
        {
          date:    new Date('25 Jun 2014 10:30:00'),
          browser: 'chrome',
          ip:      '81.64.177.27',
          location: {
            latitude:  43.7031,
            longitude: 7.2661
          }
        },
        {
          date:    new Date('24 Jun 2014 10:30:00'),
          browser: 'firefox',
          ip:      '81.64.177.27',
          location: {
            latitude:  43.7031,
            longitude: 7.2661
          }
        },
        {
          date:    new Date('25 Jun 2014 12:30:00'),
          browser: 'safari',
          ip:      '36.65.65.65',
          location: {
            latitude:  40.7031,
            longitude: 8.2661
          }
        },
        {
          date:    new Date('15 Jun 2014 10:30:00'),
          browser: 'opera',
          ip:      '99.99.99.99',
          location: {
            latitude:  3.4031,
            longitude: 7.3421
          }
        },
        {
          date:    new Date('25 Jun 2014 10:30:00'),
          browser: 'chrome',
          ip:      '81.64.177.27',
          location: {
            latitude:  43.7031,
            longitude: 7.2661
          }
        },
        {
          date:    new Date('24 Jun 2014 10:30:00'),
          browser: 'firefox',
          ip:      '81.64.177.27',
          location: {
            latitude:  43.7031,
            longitude: 7.2661
          }
        },
        {
          date:    new Date('25 Jun 2014 12:30:00'),
          browser: 'safari',
          ip:      '36.65.65.65',
          location: {
            latitude:  40.7031,
            longitude: 8.2661
          }
        },
        {
          date:    new Date('15 Jun 2014 10:30:00'),
          browser: 'opera',
          ip:      '99.99.99.99',
          location: {
            latitude:  3.4031,
            longitude: 7.3421
          }
        }
      ];
      $scope.selectedActivity = $scope.recentActivities[0];
      $scope.select = function select(activity) {
        $scope.selectedActivity = activity;
      }
    }
]);
