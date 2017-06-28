
var app = angular.module("myApp",['yProgressModule']);
app.controller("numCtrl", function ($scope) {

    // sWidth代表圆弧的宽度
    $scope.sWidth= 6;

    //rWh代表圆盒子的宽高,单位为px
    $scope.rWh = 100;

    //rPercent代表加载的百分比
    $scope.rPercent = 100;

    //当未到100%所要显示的圆弧颜色和到达100%圆弧显示颜色，所填颜色以逗号隔开，只能填两种颜色
    $scope.rColor = "#f04134,#00a854";

    //sDasharray代表加载圆弧的长度
    $scope.sDasharray = 295.31 / 100 * $scope.rPercent;


    $scope.cc = function () {
        if($scope.rPercent + 10 < 100){
            $scope.rPercent += 10;
        }else{
            $scope.rPercent = 100;
        }
    };
    $scope.tt = function () {
        if($scope.rPercent -10 > 0){
            $scope.rPercent -= 10;
        }else{
            $scope.rPercent = 0;
        }
    };

});


