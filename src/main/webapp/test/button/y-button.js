/**
 * Created by zeng on 17/1/30.
 */
angular.module('yBtnModule',[]).directive('yBtn', function () {
    var enumData = {
        /* 按钮类型 */
        type:{sub:"class",value:{primary:"ant-btn ant-btn-primary",default:"ant-btn",dashed:"ant-btn ant-btn-dashed",danger:"ant-btn ant-btn-danger"}},
        /* 圆形按钮 */
        sharp:{sub:"class",value:{default:"",sharp:"ant-btn-circle"}},
        /* 按钮大小 */
        size:{sub:"class",value:{larger:"ant-btn-lg",default:"",small:"ant-btn-sm"}},
        /* 等待模式 */
        loading:{sub:"class",value:{loading:"anticon anticon-spin anticon-loading"}},
        /* 禁用按钮 */
        disabled:{sub:"attr",value:{default:"",disable:"disabled"}},
        /* 幽灵按钮（将颜色反转） */
        ghost:{sub:"class",value:{default:"",ghost:"ant-btn-background-ghost"}}
    };
    return {
        templateUrl:'y-button-Temp.html',
        replace: true,
        scope: {
            btnText: '@',
            tClick:'&',
            eda:"=ed",
            logText: '@',
            tType:'@',
            tSize:'@',
            tIcon:'@',
            tSharp:'@',
            tLoading:'@',
            tGhost:'@',

        },
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            if($scope["tType"] != null && $scope["tType"] != undefined){
                $scope.vType=enumData["type"]["value"][$scope["tType"]];
            }

            // $scope.vSharp=enumData["sharp"]["value"][$scope["tSharp"]];
            // $scope.vSize=enumData["size"]["value"][$scope["tSize"]];
            // $scope.vLoading=enumData["loading"]["value"][$scope["tLoading"]];
            // $scope.vDisabled=enumData["disabled"]["value"][$scope["tDisabled"]];
            // $scope.tGhost=enumData["ghost"]["value"][$scope["tGhost"]];
            $transclude($scope,function(clone,$scope){
                //$scope.eda = js_highlight(clone.html());
            });
            console.log();
            //var tmpclassUnClick = 'ant-btn ant-btn-primary';
            //var tmpclassClick = 'ant-btn ant-btn-primary ant-btn-clicked';
            //var tmpclass = tmpclassUnClick;
        },
        link: function (scope, element, attrs) {

            var tmpelementBtn = element.find('button');//angular.element(element.children().eq(0));
            // scope.tmpclassClick='ant-btn-clicked';
            // scope.tmpclass = scope.tmpclassUnClick;
            //scope.clickskin =
            tmpelementBtn.bind('click', clickskin);
            var isClicked = false;
            function clickskin() {
                if(!isClicked){
                    if(scope.tClick != null && scope.tClick != undefined)
                        /* 调用回调函数时需要对实参进行封装，属性名就是回调函数的形参名 */
                        scope.tClick({aa:scope.logText});
                    tmpelementBtn.addClass('ant-btn-clicked');
                    setTimeout(unClicked, 1000);
                }
                isClicked = true;
            }
            //scope.unClicked =
            function unClicked() {
                isClicked = false;
                tmpelementBtn.removeClass('ant-btn-clicked');
            }
        }
    };
});