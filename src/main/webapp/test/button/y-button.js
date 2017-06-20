/**
 * Created by zeng on 17/1/30.
 */
angular.module('yBtnModule',[]).directive('yBtn', function () {
    return {
        templateUrl:'y-button-Temp.html',
        replace: true,
        scope: {
            btntext: '@',
            tclick:'&',
            eda:"=ed"
        },
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            $transclude($scope,function(clone,$scope){
                $scope.eda = js_highlight(clone.html());
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
            function clickskin() {
                scope.tclick();
                tmpelementBtn.addClass('ant-btn-clicked');
                //scope.tmpclassClick='ant-btn-clicked';
                //console.log({'scope':tmpscope});
                //console.log({'element':tmpelement});
                //console.log({'attrs':tmpattrs});
                setTimeout(unClicked, 500);
            }
            //scope.unClicked =
            function unClicked() {
                //scope.tmpclassClick='';
                tmpelementBtn.removeClass('ant-btn-clicked');
            }
        }
    };
});