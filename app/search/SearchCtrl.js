(function () {
    "use strict";
    var app = angular.module('ikeaApp');
    app.controller('SearchCtrl', ['$scope', 'ImportioApi', function ($scope, ImportioApi) {
        console.log('Search controller says hello');
        var promise = ImportioApi.get("chair");
        promise.then(function (data) {
            console.log(data);
        });
    }]);
}());