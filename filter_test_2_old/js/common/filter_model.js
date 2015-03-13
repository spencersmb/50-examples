angular.module('heroApp.models.filters',[

])
    .service('filtersModel', function () {
        var model = this;

        model.toggleSelection = function toggleSelection(value, key) {
            console.log('toggle');
        };

    })
;