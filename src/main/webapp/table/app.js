/**
 * Created by zeng on 17-6-23.
 */
var app = angular.module("myApp",['yInputModule']);
app.controller("tableCtrl", function ($scope) {

    $scope.abc=[
        {"name":"zeng1","age":"12","address":"浙江省杭州市"},
        {"name":"zeng2","age":"22","address":"浙江省湖州市"},
        {"name":"zeng3","age":"26","address":"浙江省嘉兴市"}
    ];

    $scope.headList=[{"name":"姓名","col":"name"},{"name":"年龄","col":"age"},{"name":"地址","col":"address"}];


    $scope.cc = function () {
        $scope.age=3;
    }
});