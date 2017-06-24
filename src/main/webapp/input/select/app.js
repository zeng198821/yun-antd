/**
 * Created by zeng on 17-6-23.
 */
var app = angular.module("myApp",['yInputModule']);
app.controller("selectCtrl", function ($scope) {
    $scope.list=[{"id":"1","name":"zeng1","selected":true,"disabled":false},{"id":"2","name":"zeng2","selected":false,"disabled":false},{"id":"3","name":"zeng3","selected":false,"disabled":false}]
    $scope.cc = function () {
        console.log($scope.selectedId);
    }

});

//var tmpshow=false;

// function showSelectDetail(e){
//
//
//     var tmpObj = $(e);
//     var offset =tmpObj.offset();
//     var tmpHeight = tmpObj.outerHeight();
//     offset.top = offset.top + tmpHeight;
//     if(tmpshow){
//         tmpshow = false;
//         tmpObj.attr({"class":"ant-select ant-select-enabled"});
//         $("#selDet").css({"top":"","left":"","width":tmpObj.width()});
//     }
//     else {
//         $("#selDet").css({"top":offset.top,"left":offset.left,"width":tmpObj.width()});
//         tmpObj.attr({"class":"ant-select ant-select-open ant-select-enabled"});
//         tmpshow = true;
//     }
//
//
// }