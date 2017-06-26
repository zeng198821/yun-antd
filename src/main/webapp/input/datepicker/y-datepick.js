/**
 * Created by zeng on 17-6-23.
 */

angular.module('yInputModule',[]).directive('yDatepick', function () {
    return {
        templateUrl:'template.html',
        replace: true,
        require: '?ngModel',
        scope: {
            tValue:"=pValue"
        },
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.vOffset={"top":0,"left":0,"height":0,"width":0};
            if($scope.tValue != null && $scope.tValue != undefined){
                $scope.vCurrDate = new Date($scope.tValue);
            }else {
                $scope.vCurrDate = new Date();
            }
            $scope.today = new Date();
            $scope.tValue="";
            $scope.vCalArr = $scope.vCurrDate.getCalDays();
            $scope.$watch('vCurrDate',function (newVal,oldVal,$scope) {
                if($scope.tValue != newVal.Format('yyyy-MM-dd')){
                    $scope.tValue = newVal.Format('yyyy-MM-dd');
                }
                 $scope.vCalArr = newVal.getCalDays();
                // $scope.$apply();
            });

        },
        link: function (scope, element, attrs) {


            /**
             * 选项列表对象
             */
            var tmpDetailObj = $(element).find('.ant-calendar-picker-container');
            var tmpSelectObj = $(element).find('.ant-calendar-picker');



            /**
             * 拷贝下拉框控件位置和大小
             * @param offset_para 下拉框控件位置
             * @param outer_height 下拉框控件高度
             * @param outer_width 下拉框控件宽度
             */
            function copyOffset(offset_para,outer_height,outer_width) {
                for(var i in scope.vOffset){
                    if(offset_para[i] == null || offset_para[i] == undefined || offset_para[i] == ""){
                        continue;
                    }
                    scope.vOffset[i] = offset_para[i];
                }
                if(outer_height != null && outer_height != undefined)
                    scope.vOffset.height = outer_height;
                if(outer_width != null && outer_width != undefined)
                    scope.vOffset.width = outer_width;
            }

            /**
             * 展现或隐藏选项列表
             * @param e 下拉框本对象
             */
            scope.showDatePickerDetail = function (e) {
                if(scope.showDetail){
                    scope.showDetail = false;
                    return;
                }else{
                    var tmpObj = $(tmpSelectObj);
                    copyOffset(tmpObj.offset(),tmpObj.outerHeight(),tmpObj.outerWidth());
                    scope.showDetail = true;
                    //scope.regEvent();
                }
                //scope.$apply();
            };

            scope.previousMonths = function(){
                scope.vCurrDate = scope.vCurrDate.addMonths(-1);
                //scope.vCalArr = scope.vCurrDate.getCalDays();
                //scope.$apply(scope.vCalArr);
            };
            scope.nextMonths = function(){
                scope.vCurrDate = scope.vCurrDate.addMonths(1);
                //scope.vCalArr = scope.vCurrDate.getCalDays();
                //scope.$apply(scope.vCalArr);
            };

            scope.previousYears = function(){
                scope.vCurrDate = scope.vCurrDate.addYears(-1);
                //scope.vCalArr = scope.vCurrDate.getCalDays();
                //scope.$apply(scope.vCalArr);
            };
            scope.nextYears = function(){
                scope.vCurrDate = scope.vCurrDate.addYears(1);
                //scope.vCalArr = scope.vCurrDate.getCalDays();
                //scope.$apply(scope.vCalArr);
            };


            /**
             * 展现或隐藏下拉框明细项
             * @param id 被选中的ID值
             */
            scope.select = function (selected_date) {
                scope.showDetail = false;
                scope.vCurrDate = selected_date;
                console.log(selected_date);
                //scope.$apply();
            };
            scope.regEvent = function(){

                var tmpPreviousYears = $(element).find('.ant-calendar-prev-year-btn');

                var tmpPreviousMonths = $(element).find('.ant-calendar-prev-month-btn');

                var tmpNextMonths = $(element).find('.ant-calendar-next-month-btn');

                var tmpNextYears = $(element).find('.ant-calendar-next-year-btn');

                var tmpHeadSelect = $('div [head="select"]');

                // tmpPreviousMonths.on('click',function(e){
                //     //阻止底层冒泡
                //     e.stopPropagation();
                //     scope.previousMonths();
                // });
                //
                // tmpPreviousYears.on('click',function(e){
                //     //阻止底层冒泡
                //     e.stopPropagation();
                //     scope.previousYears();
                // });
                //
                // tmpNextMonths.on('click',function(e){
                //     //阻止底层冒泡
                //     e.stopPropagation();
                //     scope.nextMonths();
                // });
                //
                // tmpNextYears.on('click',function(e){
                //     //阻止底层冒泡
                //     e.stopPropagation();
                //     scope.nextYears();
                // });

                tmpHeadSelect.on('click',function(e){
                    //阻止底层冒泡
                    e.stopPropagation();
                    //scope.nextYears();
                });
            };

            scope.regEvent();
            /**
             * 单击空白处直接隐藏下拉框
             */
            $('body').click(function(){
                scope.showDetail = false;
                scope.$apply();
            });
            tmpSelectObj.on('click',function(e){
                //阻止底层冒泡
                e.stopPropagation();
                scope.showDatePickerDetail(e);
                scope.$apply();
            });



        }
    };
});