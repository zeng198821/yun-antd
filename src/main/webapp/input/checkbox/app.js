/**
 * Created by xjq on 2017/6/27.
 */
var app = angular.module("myApp",['yCheckboxModule']);
app.controller("checkboxCtrl", function ($scope) {
    // $scope.age=2;
    // $scope.cc = function () {
    //     $scope.age=3;
    // }
    $scope.checkboxList = [
        {"id":1,"name":"Apple","checked":true,"disabled":true},
        {"id":2,"name":"Banana","checked":false,"disabled":true},
        {"id":3,"name":"Peach","checked":false,"disabled":false},
        {"id":4,"name":"Lemon","checked":false,"disabled":false},
        {"id":5,"name":"Mango","checked":false,"disabled":false}
    ];
    $scope.submit = function(){
        var checkedResult = "";
        for(var i in $scope.checkboxList){
            var tmp = $scope.checkboxList[i];
            if(tmp.checked == true){
                checkedResult += tmp.id + ",";
            }
        }
        alert(checkedResult);
    };
    $scope.checkAll = function () {
        for(var i in $scope.checkboxList){
            var tmp = $scope.checkboxList[i];
            tmp.checked = true;
        }
    };
    $scope.checkNone = function () {
        for(var i in $scope.checkboxList){
            var tmp = $scope.checkboxList[i];
            tmp.checked = false;
        }
    };
    $scope.checkReverse = function () {
        for(var i in $scope.checkboxList){
            var tmp = $scope.checkboxList[i];
            if(tmp.checked){
                tmp.checked = false;
            }else {
                tmp.checked = true;
            }
        }
    };
    $scope.disabledAll = function () {
        for(var i in $scope.checkboxList){
            var tmp = $scope.checkboxList[i];
            tmp.disabled = true;
        }
    };
    $scope.disableNone = function () {
        for(var i in $scope.checkboxList){
            var tmp = $scope.checkboxList[i];
            tmp.disabled = false;
        }
    };
});