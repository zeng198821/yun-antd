/**
 * Created by xu on 2017/6/28.
 */
angular.module('yProgressModule',[]).directive("pTwo",function(){
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        scope: {
            vType : "@tType",
            sWidth : "=sWidth",
            sDasharray : "=sDasharray",
            rWH : "=rWh",
            rPercent : "=rPercent",
            rColor : "=rColor"
        },
        replace: true,
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            // alert($scope.vType +";"+ $scope.rPercent);
            var seColor = $scope.rColor.split(",");
            $scope.showColor = seColor[1];
            show();
            $scope.$watch('rPercent',function (newVal,oldVal,$scope) {
                $scope.sDasharray = 295.31 / 100 * $scope.rPercent;
                show();
            });

            function show(){
                if($scope.rPercent == 100 && seColor.length == 2){
                    $scope.showColor = seColor[1];
                }else{
                    $scope.showColor = seColor[0];
                }

                if($scope.rPercent == 0){
                    $scope.showColor = "#CDCDB4";
                }

                if($scope.vType == 4){
                    if($scope.rPercent == 100){
                        $scope.showContent = "完成加载";
                    }else{
                        $scope.showContent = seColor[0];
                        $scope.showContent = "正在加载";
                    }

                    if($scope.rPercent == 0){
                        $scope.showContent = "#CDCDB4";
                        $scope.showContent = "未加载";
                    }
                }
            }

        }
    };
});