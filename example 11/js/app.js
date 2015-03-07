angular.module('nameApp', [])
    .controller('NameCtrl', function ($scope){
       $scope.firstName = 'John';
        $scope.lastName = 'Smith';
    });