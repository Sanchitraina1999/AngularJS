var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
}])

myApp.controller('NinjaController', ['$scope', '$http', ($scope, $http) => {
    $http.get('data/ninjas.json')
        .then((res) => {
            $scope.ninjas = res.data
        })
    console.log(angular.toJson($scope.ninjas))
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