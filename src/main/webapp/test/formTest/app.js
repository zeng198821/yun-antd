/**
 * Created by zeng on 17-7-3.
 */
var app = angular.module("myApp",['yDataEntry','yDataDisplay','yFeedback','yun.feedback']);
app.controller("myCtrl", function ($scope) {
    $scope.checkboxList = [
        {"id":1,"name":"Apple","checked":true,"disabled":true},
        {"id":2,"name":"Banana","checked":false,"disabled":true},
        {"id":3,"name":"Peach","checked":false,"disabled":false},
        {"id":4,"name":"Lemon","checked":false,"disabled":false},
        {"id":5,"name":"Mango","checked":false,"disabled":false}
    ];
    $scope.showBtnInfo = {
        "showCheckAllBtn" : true,
        "showCheckNoneBtn" : true,
        "showCheckReverseBtn" : true,
        "showDisabledAllBtn" : false,
        "showDisabledNoneBtn" : false
    }

    $scope.age=2;
    $scope.name1 = 'abc';
    $scope.cc = function () {
        $scope.age=3;
    }
    $scope.textChange=function (e){
        console.log(e);
    }
    $scope.checkValue="";
    $scope.selectedDate = "";
    $scope.onCheckBoxChange = function (e) {
        console.log(e);
        console.log($scope.checkValue);
    }
    $scope.onNumValueChange = function (e) {
        console.log(e);
    }
    $scope.onDateChange = function (e) {
        console.log(e);
    }

    $scope.rowDataList=[
        {"name":"zeng1","age":"12","address":"浙江省杭州市"},
        {"name":"zeng2","age":"22","address":"浙江省湖州市"},
        {"name":"zeng3","age":"26","address":"浙江省嘉兴市"}
    ];

    $scope.headList=[{"name":"姓名","col":"name"},{"name":"年龄","col":"age"},{"name":"地址","col":"address"}];




});