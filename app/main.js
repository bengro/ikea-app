(function () {
    "use strict";
    var app = angular.module("ikeaApp", ['ngRoute', 'ngMaterial']);
    app.controller('SearchCtrl', function ($scope) {
        console.log('hello' + $scope);
    });
}());