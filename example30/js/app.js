angular.module('countryApp', ['ngRoute'])

    //config inits the route
    .config(function($routeProvider){
      $routeProvider.
          when('/',{
              template: '<ul><li ng-repeat="country in countries">{{country.name}}</li></ul>',
              controller:'CountryListCtrl'
          }).
          //:countryName acts as a variable
          when('/:countryName', {
              template:'<h1>Todo create country detail view</h1>',
              controllers: 'CountryDetailCtrl'
          }).
          otherwise({
              redirectTo:'/'
          });

    })
    .controller('countryListCtrl', [ '$scope', '$http',function ($scope, $http){
        $http.get('countries.json').success(function(data){
           $scope.countries = data;
        });

        $scope.sortField = '-name';
        $scope.reverse = true;

    }])
    .controller('CountryDetailCtrl', function($scope, $routeParams){
        console.log($routeParams);
    })
    ;