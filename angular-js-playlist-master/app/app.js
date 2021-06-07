var myApp = angular.module('myApp', [])

myApp.controller('NinjaController', ['$scope', ($scope) => {
    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green",
            rate: 50
        },
        {
            name: "Sanchit",
            belt: "yellow",
            rate: 30
        },
        {
            name: "Sativa",
            belt: "black",
            rate: 10
        },
        {
            name: "Shivam",
            belt: "red",
            rate: 1000
        },
    ];
}])