/**
 * Created by xjq on 2017/6/27.
 */
angular.module('yCheckboxModule',[]).directive('yCheckbox', function () {
    return {
        templateUrl:'template.html',
        replace: true,
        require: '?ngModel',
        scope: {
            checkboxList : "=yValue"
        },
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.checkOn = function (e){
                if(e.disabled){
                    return false;
                }
                for(var i in $scope.checkboxList){
                    var tmp = $scope.checkboxList[i];
                    if(tmp.id === e.id){
                        if(tmp.checked === false){
                            tmp.checked = true;
                        }else{
                            tmp.checked = false;
                        }
                    }
                }
            };
        },
        link: function (scope, element, attrs) {

        }
    };
});