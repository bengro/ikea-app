(function () {
    "use strict";
    var app = angular.module('ikeaApp');
    app.controller('SearchCtrl', ['$scope', 'Data', 'StateManager', '$location', function ($scope, Data, StateManager, $location) {

        /**
         * Init method for this controller, here values are initialised.
         */
        function init() {
            var searchParam = $location.search();
            $scope.searchInput = (searchParam.q !== undefined) ? searchParam.q : null;
        }
        init();

        /**
         * Triggering a search request, private method.
         */
        function ajaxCall() {
            var promise = Data.get($scope.searchInput);
            promise.then(function (data) {
                console.log(data);
            });
        }

        /**
         * On keyup event on input field 
         */
        $scope.validate = function () {
            if ($scope.searchInput === '') {
                $location.path('/').search({}).replace();
            }
        };

        /**
         * Invoked when hit search button
         */
        $scope.search = function () {
            $location.replace().search('q', $scope.searchInput);
            Data.addSearch($scope.searchInput);
            ajaxCall();
        };

        /**
         * Invoked when hitting the clear button
         */
        $scope.close = function () {
            $scope.searchInput = null;
            $location.path('/').search({}).replace();
            init();
        };
    }]);
}());