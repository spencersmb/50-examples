angular.module('hero.module', ['hero.services', 'hero.filters','checklist-model'])
    .controller('heroCtrl', ['$scope','data', function ($scope, data) {

        $scope.title = 'Heroes Charge App';
        $scope.myHeroes = [];

        //method on the scope that takes in data and reassigns it to scope.heroes.
        $scope.setData = function(data){
            $scope.heroes = data.heroes;
            //console.log($scope.heroes);
        };
        //call get method from country.services injection passing in data location and the callback function which takes in the data.
        data.get('js/data/heroes.json', $scope.setData);

        //SORT BY NEWEST
        $scope.options = [
            { label: 'Newest', value: true },
            { label: 'Oldest', value: false }
        ];

        //Sets the options to grab the first in whats selected
        //if newest, grab the first element in newest
        //then when we filter by pub date it looks for the value of label.
        //orderby filter param knows to filter in order - angular feature.
        $scope.descending = $scope.options[0];

        $scope.descending = $scope.options[0];

          $scope.roles = {
             Strength: "Strength",
             tag2: "tag2",
             tag3: "tag3",
             tag4: "tag4"
           };
  $scope.user = {
    roles: []
  };


        $scope.filters = {
            query: "",
            tags: [
                {
                    label: "Strength",
                    selected: false
                },
                {
                    label: "tag2",
                    selected: false
                },
                {
                    label: "tag2",
                    selected: false
                },
                {
                    label: "tag4",
                    selected: false
                },
                {
                    label: "tag5",
                    selected: false
                }
            ]
        };

        //--------------------------------------------------
        // HERO ARRAY
        //--------------------------------------------------

        $scope.isFull = false;

        //ADD HERO
        $scope.addHero = function(hero){
          var isAdded;

          if( $scope.myHeroes.length < 5 ){

            isAdded = _.contains($scope.myHeroes, hero);

            if(isAdded){
              alert('hero is already added');
            }else{
              $scope.myHeroes.push(hero);
            }

          } else{
            alert('Your team is full!');
          }

          console.log($scope.isTeamFull());
        };

        //ADD TEAM BUTTON
        //Return true if team array has 5 players
        function isTeamFull(){
          return $scope.myHeroes.length >= 5;
        }

        //REMOVE HERO
        $scope.removeHero = function(hero){
          var i = $scope.myHeroes.indexOf(hero);
          $scope.myHeroes.splice(i,1);
        };

        $scope.isTeamFull = isTeamFull;

    }]);