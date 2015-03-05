(function () {
    "use strict";
    var app = angular.module('ikeaApp');
    app.controller('SearchCtrl', ['$scope', 'Data', '$location', function ($scope, Data, $location) {

        /**
         * Init method for this controller, here all local scope variables are initialised.
         */
        function init() {
            var searchParam = $location.search();
            $scope.searchInput = (searchParam.q !== undefined) ? searchParam.q : null;
            $scope.results = [];
            if ($scope.searchInput !== null) ajaxCall();
        }
        init();

        /**
         * Triggering a search request; notice it's private method.
         */
        function ajaxCall() {
            var result = Data.search($scope.searchInput);
            result.then(function (data) {
                $scope.results = data;
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
            ajaxCall(); // not really, as we're using a static json for now.
        };

        /**
         * Invoked when hitting the clear button
         */
        $scope.close = function () {
            $scope.results = [];
            $scope.searchInput = null;
            $location.path('/').search({}).replace();
            init();
        };

    }]);
}());