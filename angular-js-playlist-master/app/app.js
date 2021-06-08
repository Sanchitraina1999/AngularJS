var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'views/home.html' })
        .when('/directory', { templateUrl: 'views/directory.html', controller: 'NinjaController' })
        .otherwise({
            redirectTo: '/home'
        })
}])

myApp.controller('NinjaController', ['$scope', ($scope) => {
    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green",
            rate: 50,
            available: true
        },
        {
            name: "Sanchit",
            belt: "yellow",
            rate: 30,
            available: false
        },
        {
            name: "Sativa",
            belt: "black",
            rate: 10,
            available: false
        },
        {
            name: "Shivam",
            belt: "red",
            rate: 1000,
            available: true
        }
    ]
    $scope.addNewNinja = (newninja) => {
        $scope.ninjas.push({
            name: newninja.name,
            belt: newninja.belt,
            rate: newninja.rate,
            available: true
        })
        newninja.name = ''
        newninja.belt = ''
        newninja.rate = ''
    }
}])