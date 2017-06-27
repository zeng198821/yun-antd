/**
 * Created by zeng on 17-6-23.
 */

angular.module('yInputModule',[]).directive('yMune', function () {
    return {
        templateUrl:'template.html',
        replace: true,
        scope: {
            tValue:"=pValue"
        },
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {

            $scope.show = function (e) {
                if(!e.disabled){
                    e.show=!e.show;
                    console.log(e);
                }
            }

        },
        link: function (scope, element, attrs) {



        }
    };
});