(function () {
    "use strict";
    var app = angular.module('ikeaApp');
    app.directive('windowManager', ['StateManager', function (StateManager) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element) {
                var wrap = element,
                    searchBar = element.find('.content__search'),
                    footer = element.find('footer');
                scope.$watch(function () {
                    return StateManager.searchState;
                }, function (newValue) {
                    if (newValue === true) {
                        wrap.addClass('wrap--search-mode');
                        footer.addClass('wrap--search-mode');
                        searchBar.addClass('wrap--search-mode');
                    } else {
                        wrap.removeClass('wrap--search-mode');
                        footer.removeClass('wrap--search-mode');
                        searchBar.removeClass('wrap--search-mode');
                    }
                });
            }
        };
    }]);
}());