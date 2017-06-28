/**
 * Created by zeng on 17-6-23.
 */
var app = angular.module("myApp",['yProgressModule']);
app.controller("numCtrl", function ($scope) {
    $scope.percentNum= 54;
    $scope.tHeight = 20;
    $scope.cc = function () {
        if($scope.percentNum + 10 < 100){
            $scope.percentNum += 10;
        }else{
            $scope.percentNum = 100;
        }
    };
    $scope.tt = function () {
        if($scope.percentNum -10 > 0){
            $scope.percentNum -= 10;
        }else{
            $scope.percentNum = 0;
        }
    };
    // setInterval("cc()",1000);
});


