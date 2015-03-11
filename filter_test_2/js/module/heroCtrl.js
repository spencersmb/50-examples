angular.module('hero.module', ['hero.services', 'hero.filters','checklist-model'])
    .controller('heroCtrl', ['$scope','data', function ($scope, data) {

        $scope.title = 'Heroes Charge App';
        $scope.myHeroes = [];
        $scope.test=[
          {
            "name": "Nuna",
            "title": "Science behind the D-Day landings",
            "description": "How innovations in science and engineering made the D-Day landings possible with giant troop tanks and tanks that could drive on water.",
            "pubDate": "2014-05-01",
            "tags": [
              "tag1",
              "tag4",
              "tag2"
            ],
            "attack": "Agil"
          },
          {
            "name": "Casey",
            "title": "Computex: Intel shows off new tech",
            "description": "Intel is showcasing a laptop with a 3D camera and motion control technology at the Computex show in Taiwan.",
            "pubDate": "2014-05-12",
            "tags": [
              "tag2",
              "tag3"
            ],
            "attack": "Int"
          }
        ];

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

    var testArr = [1,4,2];
    var sample = [1,2,5];
    console.log($scope.test[0].tags.length);

    function myTest(jsonArr, chkboxArr){
      var length1 = jsonArr.test[0].tags.length;
      var length2 = chkboxArr.length;

      var newArr = _.intersection(jsonArr, chkboxArr);
      var newArrLength = newArr.length;

      if(newArrLength >= length1){
        //this means the new array has at least one or more of the values in tag and add this item to filtered
        return true;
      } else if ()
    }
    console.log(_.intersection(testArr, sample));

        //Sets the options to grab the first in whats selected
        //if newest, grab the first element in newest
        //then when we filter by pub date it looks for the value of label.
        //orderby filter param knows to filter in order - angular feature.
        $scope.descending = $scope.options[0];

  //
  //        $scope.roles = {
  //           Strength: "Strength",
  //           tag2: "tag2",
  //           tag3: "tag3",
  //           tag4: "tag4"
  //         };
  //$scope.user = {
  //  roles: []
  //};


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
        label: "Strength",
        selected: false
      },
      {
        label: "tag2",
        selected: false
      },
      {
        label: "tag3",
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









    $scope.selection=[];

    // toggle selection for a given employee by name
    $scope.toggleSelection = function toggleSelection(employeeName) {
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