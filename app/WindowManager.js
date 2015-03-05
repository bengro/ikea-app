(function () {
    "use strict";
    var app = angular.module('ikeaApp');
    app.directive('windowManager', ['StateManager', function (StateManager) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element) {
                scope.$watch(function () {
                    return StateManager.searchState;
                }, function (newValue) {
                    if (newValue === true) {
                        element.addClass('wrap--search-mode');
                    } else {
                        element.removeClass('wrap--search-mode');
                    }
                });
            }
        };
    }]);
}());