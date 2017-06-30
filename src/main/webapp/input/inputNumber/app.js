/**
 * Created by zeng on 17-6-23.
 */
var app = angular.module("myApp",['yInputNumModule']);
app.controller("numCtrl", function ($scope) {
    $scope.age=2;
    $scope.cc = function () {
        $scope.age=3;
    }
});