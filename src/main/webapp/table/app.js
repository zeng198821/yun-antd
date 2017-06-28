/**
 * Created by zeng on 17-6-23.
 */
var app = angular.module("myApp",['yInputModule']);
app.controller("tableCtrl", ['$scope','$compile',function ($scope,$compile) {

    $scope.abc=[
        {"name":"zeng1","age":"12","address":"浙江省杭州市"},
        {"name":"zeng2","age":"22","address":"浙江省湖州市"},
        {"name":"zeng3","age":"26","address":"浙江省嘉兴市"}
    ];

    $scope.headList=[{"name":"姓名","col":"name"},{"name":"年龄","col":"age"},{"name":"地址","col":"address"}];


    $scope.cc = function () {
        console.log($scope);
        console.log($compile);
        $("#tt").html('<y-table head-list="headList" row-list="abc"></y-table>');
        var tmpLinkFunction = $compile();
        var htmlstr = tmpLinkFunction($scope);

    }
    $scope.dd = function () {
        console.log($scope);
        console.log($compile);
        var tmpLinkFunction = $compile('<y-table head-list="headList" row-list="abc"></y-table>');
        var htmlstr = tmpLinkFunction($scope);
        $("#tt").html(htmlstr);
    }
}]);