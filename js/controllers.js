/**
 * Created by aleksandar on 18.10.15..
 */
'use strict'

var myAppControllers = angular.module('myApp.controllers', []);

myAppControllers.controller('HeaderLinksController', ["$scope", function($scope) {
    $scope.links = [
        {url:"view1", name: "View 1"},
        {url:"view2", name: "View 2"}
    ]
}]);

myAppControllers.controller('Controller1', function($scope) {
    $scope.message = "Hello from view 1";
});

myAppControllers.controller('Controller2', function($scope) {
    $scope.message = "Hello from view 2";
    $scope.now = new Date();
});


