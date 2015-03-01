(function () {
    "use strict";
    var app = angular.module("ikeaApp");
    app.factory('StateManager', function () {
        var manager = {};
        manager.searchState = false;
        manager.setSearchState = function (state) {
            manager.searchState = state;
        };
        return manager;
    });
}());