/**
 * Created by zeng on 17-6-23.
 */

angular.module('yInputModule',[]).directive('yNum', function () {
    return {
        templateUrl:'template.html',
        replace: true,
        scope: {
            max:'@',
            min:'@',

        },
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.vMax = parseInt($scope.max);
            $scope.vMin = parseInt($scope.min);
            $scope.tValue = $scope.vMin;
            $scope.$watch('tValue',function (newVal,oldVal,$scope) {
                if(isNaN(newVal) || $scope.vMax < newVal || $scope.vMin > newVal) {
                    $scope.tValue = oldVal;
                }
            });
            //$scope.$apply();
        },
        link: function (scope, element, attrs) {
            scope.up = function () {
                if(scope.vMax >= scope.tValue && scope.vMin <= scope.tValue){
                    scope.tValue++;
                }
            }
            scope.down = function () {
                if(scope.vMax >= scope.tValue && scope.vMin <= scope.tValue){
                    scope.tValue--;
                }
            }


        }
    };
});