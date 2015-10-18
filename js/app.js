/**
 * Created by aleksandar on 17.10.15..
 */
var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/view1', {
            controller: 'Controller1',
            templateUrl: 'partials/view1.html'
        }).when('/view2', {
            controller: 'Controller2',
            templateUrl: 'partials/view2.html'
        });
        $locationProvider.html5Mode(true); //activate HTML5 Mode
});