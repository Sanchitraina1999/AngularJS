var myApp = angular.module('myApp', [])

myApp.controller('NinjaController', ['$scope', ($scope) => {
    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green"
        },
    ];
}])