/**
 * Created by zeng on 17-623.
 */
var app = angular.module("myApp",['yInputModule']);
app.controller("numCtrl", function ($scope) {
    $scope.dd='2017-05-23';
    $scope.cc = function () {
        $scope.age=3;
    }
});


