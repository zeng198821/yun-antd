/**
 * Created by zeng on 17-6-23.
 */
var app = angular.module("myApp",['yInputModule']);
app.controller("tableCtrl", ['$scope','$compile',function ($scope,$compile) {

    $scope.show = false;

    $scope.headList=[{"name":"姓名","col":"name"},{"name":"年龄","col":"age"},{"name":"地址","col":"address"}];


    $scope.cc = function () {
        $scope.show = true;
    }
    $scope.dd = function () {

    }
}]);