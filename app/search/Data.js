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

            $http.get('artifacts/ikea-products.json').
                success(function (data) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };

        /**
         * Filters the ikea products by some filter criteria.
         * @param ikea products json
         * @param filter criteria {column: value}
         */
        data.search = function (filter) {
            var deferred = $q.defer();

            if (!products) {
                products = data.load();
            }

            products.then(function (allProducts) {
                // iterate over data and apply filter
                var i, obj, results = [];
                for (i = 0; i < allProducts.length; i += 1) {
                    obj = data[i];
                    if (obj[filter.col] !== undefined) {
                        if (obj[filter.col].indexOf(filter.value) > -1) {
                            results.push(obj);
                        }
                    }
                }
                deferred.resolve(results);
            });

            return deferred.promise;
        };

        return data;
    }]);
}());