/**
 * Created by zeng on 17-6-23.
 */

angular.module('yInputModule',[]).directive('yModal', function () {
    return {
        templateUrl:'template.html',
        replace: true,
        scope: {
            show:'='
        },
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.hideModal = function () {
                $scope.show = false;
            }
            $scope.ok = function () {
                $scope.hideModal();
            }
        },
        link: function (scope, element, attrs) {



        }
    };
});