angular.module('hero.filters', ['heroApp.models.filters'])
    .filter('heroesFilter', function(filtersModel) {

       return function(items, filters, selection){

           var filtered = [];

           var tagObj = {};
           var selection = selection;

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
               //var selection =[];
               var selectedValue=[];
               var selected = [];

               //console.log('matchText = ' + matchText);
               //console.log('item name: ' + item.name);

               //chkValue.push(tag.label);
               var propOf = [];
               var chkValue = [];
             angular.forEach(filters.tags, function(tag) {

                 //console.log(tag.key);
                if(tag.selected) {
                    chkValue.push(tag.label);

                    //console.log(tag);
                    var keyassign = tag.key;

                    tagObj[keyassign]= tag.label;

                    //console.log(chkValue);
                    selectedTags += 1;
                    //console.log(tag.label);
                    //console.log(item);
                    //console.log(item);

                    var value = _.values(item);
                    var flatten = _.flatten(value);
                    //console.log(flatten);
                    //console.log(chkValue);
                    //console.log(flatten.indexOf(tag.label)); //works for one item

                    //if(flatten.indexOf(tag.label) > -1){
                    //
                    //}
                    //console.log(selection);
                    console.log(_.intersection(flatten,selection));
                    if(_.intersection(flatten,selection).length === selection.length){
                        tagsMatched += 1;
                    }
                    //var readyToGoList = _.chain(item).result('tags').contains('tag3','tag4');


                    //var ready = _.matcher({attack: "Int", name:"Casey"});
                    //var readyToGoList = _.isMatch(item, {attack: "Int", name:"Casey"});


                    //console.log(_.propertyOf(item)(tag.key));//works
                    //var ready = _.matcher({attack: "Int", name:"Casey"});
                    //var readyToGoList = _.isMatch(item, tagObj);

                    //works for tags
                    //var readyToGoList = _.chain(item).result('tags').contains('tag3');

                    //if selected = array do the chain/intersect method
                    //if selected = object then do the _.isMatch method

                    //how do you refilter the filtered list?
                    //var readyToGoList = _.chain(item).result('tags').contains('tag3','tag4');


                    //console.log(readyToGoList);

                }



             }); //END FOR EACH filter.tag

               //begin for each for filter.passives?


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

