(function () {
    "use strict";
    var app = angular.module("ikeaApp");
    app.factory('StateManager', function ($rootScope, $location) {
        var manager = {};

        /**
         * The app knows to states: true: we are in search state, false: we are in result state*
         * @type {boolean}
         */
        manager.searchState = false;

        /**
         * Here we listen to URL changes.
         * This is where later, I should manage routes so that users can use their back buttons.
         */
        $rootScope.$on('$locationChangeSuccess', function () {
            var searchParam = $location.search();
            if (searchParam.q !== undefined) {
                manager.searchState = true;
            } else {
                manager.searchState = false;
            }
        });

        return manager;
    });
}());