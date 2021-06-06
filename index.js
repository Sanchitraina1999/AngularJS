var myapp = angular.module('myapp',[])

myapp.controller('mainController',($scope,$filter)=>{
    $scope.name = 'Jane Doe'
    $scope.nameInLowerCase = $filter('lowercase')($scope.name)
    console.log($scope)
})