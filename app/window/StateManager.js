(function () {
    "use strict";
    var app = angular.module("ikeaApp");
    app.factory('StateManager', function ($rootScope, $location) {
        var manager = {};

        /**
         * The app knows to states: 
         *     true: we are in search state (no results shown)
         *     false: we are in result state
         * @type {boolean}
         */
        manager.searchState = false;

        /**
         * Here we listen to URL changes.
         * Later to enable browser history, here we would have to make changes.
         */
        $rootScope.$on('$locationChangeSuccess', function () {
            var searchParam = $location.search();
            manager.searchState = searchParam.q !== undefined;
        });

        return manager;
    });
}());