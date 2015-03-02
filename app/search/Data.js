(function () {
    "use strict";
    var app = angular.module("ikeaApp");
    app.factory('Data', ['$q', function ($q) {
        var data = {},
            searches = [];

        data.addSearch = function (searchInput) {
            searches.push(searchInput);
        };

        data.get = function (q) {
            var query = {
                "input": {
                    "query": q
                },
                "connectorGuids": ["e6482869-3073-4778-b15e-0c02a01a1c55"]
            },
                deferred = $q.defer();

            importio.query(query, {
                "data": function (data) {
                    $q.resolve(data);
                }
            });
            return deferred.promise;
        };

        return data;
    }]);
}());