(function () {
    "use strict";
    var app = angular.module('ikeaApp');
    app.controller('SearchCtrl', ['$scope', 'Data', 'StateManager', function ($scope, Data, StateManager) {

        // holds the input value
        $scope.searchInput = null;

        $scope.search = function () {
            StateManager.setSearchState(true);

            var promise = Data.get($scope.search_input);
            promise.then(function (data) {
                console.log(data);
            });
        };

        $scope.validate = function () {
            console.log($scope.searchInput);
            if ($scope.searchInput === '') {
                StateManager.setSearchState(false);
            }
        };

    }]);
}());