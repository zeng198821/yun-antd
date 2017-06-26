/**
 * Created by zeng on 17-623.
 */
var app = angular.module("myApp",['yInputModule']);
app.controller("numCtrl", function ($scope) {
    $scope.dd=new Date().addDays(1).Format('yyyy-MM-dd');
    $scope.cc = function () {
        $scope.age=3;
    }
});


