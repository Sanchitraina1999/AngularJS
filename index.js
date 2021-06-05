var myapp = angular.module('myapp',[])

myapp.controller('mainController',($scope)=>{
    $scope.name = 'Jane Doe'
    console.log($scope)
})