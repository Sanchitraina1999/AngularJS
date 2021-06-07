var myApp = angular.module('myApp', [])

myApp.controller('NinjaController', ['$scope', ($scope) => {
    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green"
        },
        {
            name: "Sanchit",
            belt: "yellow"
        },
        {
            name: "Sativa",
            belt: "black"
        },
        {
            name: "Shivam",
            belt: "red"
        },
    ];
}])