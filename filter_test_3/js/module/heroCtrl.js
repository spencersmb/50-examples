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


        $scope.filters = {
          query: "",
          tags: [
          {
              label: "Agil",
              key: "attack"
          },
          {
            label: "tag2",
            selected: false,
              key: "tags"
          },
          {
            label: "tag3",
              key: "tags"
          },
          {
            label: "tag4",
              key: "tags"
          },
          {
            label: "Int",
            selected: false,
            key: "attack"

          }
        ],
        passives:[
            {
                label: "Stun",
                selected:false
            },
            {
                label: "Silence",
                selected:false
            },
            {
                label: "Bash",
                selected:false
            }
        ]
    };


    $scope.selection=[];
        //console.log($scope.selection.indexOf);

    // toggle selection for a given employee by name
    $scope.toggleSelection = function toggleSelection(employeeName, key) {

      var idx = $scope.selection.indexOf(employeeName);

      // is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }

      // is newly selected
      else {

        $scope.selection.push(employeeName);

      }
    };

    //$('.dropdown-toggle').on('click', function (e) {
    //    if($(this).hasClass('active')){
    //        $(this).removeClass('active');
    //        $(this).addClass('wasActive');
    //    } else{
    //        $(this).addClass('active');
    //    }
    //});

    $scope.setSelected = function setSelected(ability){

        var current = ability;
        var without=[];
        var idx = $scope.selection.length;
        var currentArr=[];
        var newSelection = [];
        var currentSelection = $scope.selection;
        angular.forEach($scope.filters.passives, function(passive){
            currentArr.push(passive.label);
        });
        //console.log(currentArr);
        //console.log(idx);
        //$scope.isCurrnetSelection = function isCurrentSelection(item){
            //take item and compare it against the selection array
        //};



        //console.log('scope 1 ' + $scope.selection);

        if( idx > 0 ){
            //compare current with passive array - determine which values need to be removed.
            //    Then remove them from selected
            $scope.selection.push(ability);
            without = _.without(currentArr, ability);
            console.log('without '+ without);
            console.log('scope before '+ $scope.selection);
            //console.log(_.intersection($scope.selection, without));

            $scope.selection = _.difference($scope.selection, without);
            console.log('scope after'+ $scope.selection);

            //$scope.selection.splice(idx, 1);
        } else {
            $scope.selection.push(ability);

        }
    };




    $scope.filters2 = {
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

    }])

;