/**
 * Created by aleksandar on 17.10.15..
 */
var app = angular.module('myApp', [])
    .controller("headerLinks", ["$scope", function($scope) {
        $scope.links = [
            {url:"#", name: "Link 11"},
            {url:"#", name: "Link 12"},
            {url:"#", name: "Link 13"}
        ]
    }]);

