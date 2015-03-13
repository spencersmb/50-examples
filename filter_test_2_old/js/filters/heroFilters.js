angular.module('hero.filters', ['heroApp.models.filters'])
    .filter('heroesFilter', function(filtersModel) {
        heroesFilter = this;

        heroesFilter.toggleSelection = filtersModel.toggleSelection;


       return function(items, filters){

           var filtered = [];



           angular.forEach(items, function (item) {

             //console.log('items are the objects in jason' + items);
               var lowerCase = filters.query.toLowerCase();
               //console.log('lowercase '+lowerCase);
               var searched = item.name.toLowerCase(filters.query);
               //console.log(' Searched '+searched);

               //simple way to say true for matchText

               //console.log('query' + filters.search);
               var matchText = lowerCase == "" || searched.indexOf(lowerCase) > -1;
               var selectedTags = 0;
               var tagsMatched = 0;
               var selection =[];
               var selectedValue=[];
               var selected = [];

               //console.log('matchText = ' + matchText);
               //console.log('item name: ' + item.name);

             angular.forEach(filters.tags, function(tag) {

                 //console.log(tag.key);
                if(tag.selected){

                    selectedTags += 1;
                    selectedValue.push(tag.label);
                    var idx = selection.indexOf(tag.label);

                      // is currently selected
                      if (idx > -1) {
                        selection.splice(idx, 1);
                      }

                      // is newly selected
                      else {

                          selection.push(tag.label);
                      }
                            var checkedTotal = selection.length;
                            var string = item[tag.key];
                            var text = string.toString();
                            var values = _.values(item);
                            var flatten = _.flatten(values);

                    //console.log(flatten);
                    console.log(selection);
                    console.log(checkedTotal);
                    //console.log(text);
                    //console.log('text '+ text);
                    //console.log('selection '+ selection);
                    //isProp works both must be arrays
                    var isProp =  _.intersection(flatten, selection);

                    //console.log('intersection ' + isProp.length);

                      if(isProp.length === checkedTotal){
                          console.log(item.name);
                          //this means the new array has at least one or more of the values in tag and add this item to filtered
                          filtered.push(item);
                      } else if (isProp.length < checkedTotal){
                          console.log('no results');
                          return false;
                      }

                }

                 //Just like the original
                 //if(tag.selected){
                 //    selectedTags += 1;
                 //    //save tag in array
                 //    selectedValue.push(tag.label);
                 //
                 //    //does the item have the tag in the object?
                 //    if(_.has(item, tag.key)){
                 //
                 //        var string = item[tag.key];
                 //        var text= string.toString();
                 //        //console.log('text '+item[tag.key]);
                 //        //console.log('tag array ' + selectedValue);
                 //        //console.log('intersection '+_.contains(item[tag.key], tag.label));
                 //
                 //        if(item[tag.key] === tag.label ||_.contains(item[tag.key], tag.label) ){
                 //            console.log(item.name);
                 //        }
                 //    }
                 //
                 //}

             });


               //angular.forEach(filters.tags, function(tag) {
               //    // console.log(selectedTags);
               //
               //
               //
               //    if (tag.selected) {
               //        //add one to keep track of selected tags
               //        selectedTags += 1;
               //
               //        //console.log('item tag = ' + item.tags.indexOf(tag.label));
               //        //console.log('item tag = ' + item.tags);
               //
               //        //loop through each item.tags and if the idexOf that tag == tag.selected label
               //        //then tags matched is true for that item
               //        if (item.tags.indexOf(tag.label.toLowerCase()) > -1) {
               //            tagsMatched += 1;
               //            //console.log('matched = '+ tagsMatched);
               //        }
               //    }
               //    // else if(tag.selected >= 1){
               //    //  // console.log('more than one');
               //    // }
               //    //console.log(selectedTags);
               //});


           //if selected tags == 0 then false and nothing gets pushed below
           var matchAnyTag = selectedTags == 0 || tagsMatched > 0;

           //if is true meaning tags matched = 1 for the item then push the item to the new array
           if (matchAnyTag && matchText) {
               //console.log('match in IF = '+ matchText + matchAnyTag);
               filtered.push(item);
               //console.log(filtered);
           }

           });

           return filtered;
       }
    });

