/**
 * Created by xu on 2017/6/28.
 */
angular.module('yProgressModule',[]).directive("pOne",function(){
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        scope: {
            vType: "@tType",
            vheight:"=tHeight",
            percent:"=tPercent"
        },
        replace: true,
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            // $scope.percent = 50;
            // $scope.percent = 100;
            var addClass = "ant-progress-show-info";
            var classArray = ["ant-progress-status-normal","ant-progress-status-active","ant-progress-status-exception","ant-progress-status-success","ant-progress-status-normal"];
            if($scope.vType != "5"){

                if($scope.vType == 3 || $scope.vType == 4){
                    // alert($scope.percent+";"+$scope.vType)
                    if($scope.percent == 100){

                        $scope.typeClass = addClass +" "+ classArray[3];
                    }else{
                        $scope.typeClass = addClass +" "+ classArray[2];
                    }
                }else{
                    $scope.typeClass = addClass +" "+ classArray[parseInt($scope.vType) - 1];
                }
            }else{
                $scope.typeClass = classArray[parseInt($scope.vType) - 1];
            }

            $scope.$watch('percent',function (newVal,oldVal,$scope) {

                if($scope.vType == 3 || $scope.vType == 4){
                    // alert($scope.percent+";"+$scope.vType)
                    if(newVal == 100){

                        $scope.typeClass = addClass +" "+ classArray[3];
                    }else{
                        $scope.typeClass = addClass +" "+ classArray[2];
                    }
                }

            });

        }
    };
});