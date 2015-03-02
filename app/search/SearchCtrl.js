(function () {
    "use strict";
    var app = angular.module('ikeaApp');
    app.controller('SearchCtrl', ['$scope', 'Data', 'StateManager', function ($scope, Data, StateManager) {
        var init = function () {
            // holds the input value
            $scope.searchInput = null;
        };

        /**
         * Triggering a search request 
         */
        var search = function () {
            var promise = Data.get($scope.searchInput);
            promise.then(function (data) {
                console.log(data);
            });
        };

        /**
         * On keyup event on input field 
         */
        $scope.validate = function () {
            if ($scope.searchInput === '') {
                StateManager.setSearchState(false);
            } else {
                Data.addSearch($scope.searchInput);
                StateManager.setSearchState(true);
                search($scope.searchInput);
            }
        };

        $scope.close = function () {
            StateManager.setSearchState(false);
            $scope.searchInput = null;
            init();
        };

        init();
    }]);
}());