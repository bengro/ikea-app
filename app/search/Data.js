(function () {
    "use strict";
    var app = angular.module("ikeaApp");

    /**
     * This factory is responsible for getting and querying the data. 
     * If at some point we would want to use the API instead of the static json file, we can change the implementation in here.
     * As a promise is returned, this won't affect the caller in any way.
     */
    app.factory('Data', ['$q', '$http', function ($q, $http) {
        var data = {},
            products;

        /**
         * Loads the json file and returns a promise. 
         * @returns {*}
         */
        data.load = function () {
            var deferred = $q.defer();

            $http.get('/ikea-products.json').
                success(function (data) {
                    deferred.when(data);
                }).error(function (data, status, headers, config) {
                    // throw error notification
                });

            return deferred.promise;
        };

        /**
         * Filters the ikea products by some filter criteria.
         * @param ikea products json
         * @param filter criteria
         */
        data.search = function (filter) {
            if (!products) {
                products = data.load();
            }

            products.then(function (data) {
                // iterate over data and apply filter
            });
        };

        return data;
    }]);
}());