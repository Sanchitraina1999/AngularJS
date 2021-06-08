var myApp = angular.module('myApp', [])

myApp.controller('NinjaController', ['$scope', ($scope) => {
    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green",
            rate: 50,
            available: true,
            thumb: ""
        },
        {
            name: "Sanchit",
            belt: "yellow",
            rate: 30,
            available: false,
            thumb: ""
        },
        {
            name: "Sativa",
            belt: "black",
            rate: 10,
            available: false,
            thumb: ""
        },
        {
            name: "Shivam",
            belt: "red",
            rate: 1000,
            available: true,
            thumb: ""
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