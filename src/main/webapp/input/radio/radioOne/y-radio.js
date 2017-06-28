/**
 * Created by xu on 2017/6/28.
 */

angular.module('yRadioModule',[]).directive("rOne",function(){
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        scope: {
            radioList : "=rValue",
            tType : '@rType',
            // 展示类型 1 ： 2：
            tVerticality : "@rVerticality",
            tSize : "@rSize",
            tSubmit : "=rSubmit"
        },
        replace: true,
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {

            // if($scope.tVerticality == 1){
            //     $scope.verticality ="";
            // }
            $scope.checkOn = function (e){
                if(e.disabled){
                    return false;
                }
                for(var i in $scope.radioList){
                    var tmp = $scope.radioList[i];
                    tmp.checked = false;
                }
                e.checked = true;
                $scope.tSubmit = e.name;
            };
        }
    };
});