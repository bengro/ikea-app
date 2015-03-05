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
         * @param filter criteria as a string
         */
        data.search = function (keyword) {
            var deferred = $q.defer(),
                extract = function (item) {
                    var newItem = {};
                    newItem.price = item.price[0];
                    newItem.img = item.img[0];
                    newItem.category = item.category[0];
                    newItem.labels = item.label[0];
                    newItem.desc = item.long_desc[0];
                    newItem.product_id = item.product_id[0];
                    newItem.title = item['img/_title'][0].split(" ")[0];
                    return newItem;
                };

            if (!products) {
                products = data.load();
            }

            products.then(function (allProducts) {
                if (allProducts.data === undefined || allProducts.data.length === 0) {
                    return deferred.reject();
                }
                // iterate over data and apply filter
                var i, obj, results = [];
                for (i = 0; i < allProducts.data.length; i += 1) {
                    obj = allProducts.data[i];
                    if (obj.product_id[0].indexOf(keyword) > -1) {
                        results.push(extract(obj));
                    } else if (obj['img/_title'][0].indexOf(keyword) > -1) {
                        results.push(extract(obj));
                    } else if (obj.category !== undefined && obj.category[0].indexOf(keyword) > -1) {
                        results.push(extract(obj));
                    }
                }
                deferred.resolve(results);
            });

            return deferred.promise;
        };

        return data;
    }]);
}());