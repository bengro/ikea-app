(function () {
    "use strict";
    var app = angular.module('ikeaApp');
    app.directive('windowManager', ['StateManager', '$window', function (StateManager, $window) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element) {
                var wrap = element;
                scope.$watch(function () {
                    return StateManager.searchState;
                }, function (newValue) {
                    if (newValue === true) {
                        wrap.addClass('wrap--search-mode');
                    } else {
                        wrap.removeClass('wrap--search-mode');
                    }
                });
            }
        };
    }]);
}());