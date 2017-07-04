/**
 * Created by zeng on 17-7-3.
 */

var templatePath='/template';

angular.module('yFeedback',[])
    .directive('yMessage',function () {
        return{
            templateUrl:templatePath+'/Feedback/messageTemplate.html',
            replace: true,
            require: '?ngModel',
            scope: {
                aTime:'@',
                aType:"@",
                aText:'@',
            },
            transclude: true,
            controller: function ($scope) {
                if($scope.aTime==""){
                    $scope.tTime=1500;
                }else
                {
                    $scope.tTime=parseInt($scope.aTime)*1000;
                }
                $scope.tIfDisplay=false;

            },
            link: function ($scope){
                $scope.clickMesPro = function () {
                    $scope.tIfDisplay=true;
                    setTimeout(function () {
                        $scope.tIfDisplay=false;
                        $scope.$apply(function(){$scope.tIfDisplay = false;});
                    },$scope.tTime);
                }
            }

        };
    })
    .directive('yModal', function () {
        return {
            templateUrl:templatePath+'/Feedback/modalTemplate.html',
            replace: true,
            scope: {
                aShow:'='
            },
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.hideModal = function () {
                    $scope.iShow = false;
                }
                $scope.ok = function () {
                    $scope.hideModal();
                }
            },
            link: function (scope, element, attrs) {

            }
        };
    })
    .directive("yProcess",function(){
        return {
            restrict: 'E',
            templateUrl: templatePath+'/Feedback/processTemplate.html',
            scope: {
                // 显示类型
                aType : "@",
                // 宽度
                aWidth : "@",
                // 粗度
                aCrude : "@",
                // 百分比
                aPercent : "=",
                // 进行中颜色
                aLoadingColor:"@",
                // 已完成颜色
                aLoadDoneColor:"@",
                aMode:"@"
            },
            replace: true,
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                var tColorArr = [];
                $scope.tShowContent = ""
                $scope.tDasharray = 295.31 / 100 * $scope.aPercent;
                if($scope.aProcessColor == null || $scope.aProcessColor == undefined){
                    $scope.aLoadingColor="#108ee9";
                }
                if($scope.aDoneColor == null || $scope.aDoneColor == undefined){
                    $scope.aLoadDoneColor="#00a854";
                }

                show();
                $scope.$watch('aPercent',function (newVal,oldVal,$scope) {
                    $scope.tDasharray = 295.31 / 100 * $scope.aPercent;
                    show();
                });

                function show(){
                    if($scope.aType == 4){
                        if($scope.aPercent == 100){
                            $scope.tShowContent = "完成加载";
                        }else{
                            $scope.tShowContent = "正在加载";
                        }
                        if($scope.aPercent == 0){
                            $scope.tShowContent = "未加载";
                        }
                    }
                }

            }
        };
    })
;


angular.module('yun.feedback',['yFeedback'])
    .factory('message',function () {
        var tCurrShowNums=0;

        var displayMessage = function (pTime,pText,pType) {
            
        };
        
        return {
            showMessage :function (pTime,pText,pType) {
                
            }
        };
    })
;








angular.module('yDataEntry',[])

    .directive('yCheckbox', function () {
        return {
            templateUrl:templatePath+'/DataEntry/checkBoxTemplate.html',
            replace: true,
            require: '?ngModel',
            scope: {
                aOptions : '=',
                aValue : '=',
                eOnChange :"&",
                aComm : '='
            },
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.countValue = function () {
                    var tmpValue="";
                    for(var i in $scope.aOptions){
                        var tmp = $scope.aOptions[i];
                        if(tmp.checked){
                            tmpValue = tmpValue + tmp.id+",";
                        }
                    }
                    tmpValue = tmpValue.substring(0,tmpValue.length - 1);
                    $scope.aValue = tmpValue;
                    return tmpValue;
                }
                $scope.checkOn = function (e,isCheckOn){
                    if(e.disabled){
                        return false;
                    }else {
                        if(isCheckOn != null && isCheckOn != undefined){
                            e.checked = isCheckOn ? true : false;
                        }else {
                            e.checked = !e.checked;
                        }
                    }
                    $scope.countValue();
                    if($scope.eOnChange != null && $scope.eOnChange != undefined){
                            //函数回调是需要注意拼装形参列表
                            $scope.eOnChange({"e":e});
                    }
                };
                $scope.checkAll = function () {
                    for(var i in $scope.aOptions){
                        $scope.checkOn($scope.aOptions[i],true);
                    }
                };
                $scope.checkNone = function () {
                    for(var i in $scope.aOptions){
                        $scope.checkOn($scope.aOptions[i],false);
                    }
                };
                $scope.checkReverse = function () {
                    for(var i in $scope.aOptions){
                        $scope.checkOn($scope.aOptions[i]);
                    }
                };
                $scope.disabledAll = function () {
                    for(var i in $scope.aOptions){
                        var tmp = $scope.aOptions[i];
                        tmp.disabled = true;
                    }
                };
                $scope.disableNone = function () {
                    for(var i in $scope.aOptions){
                        var tmp = $scope.aOptions[i];
                        tmp.disabled = false;
                    }
                };

            },
            link: function (scope, element, attrs) {

            }
        };
    })

    .directive('yInputNumber', function () {
        return {
            templateUrl:templatePath + '/DataEntry/inputNumberTemplate.html',
            replace: true,
            require: '?ngModel',
            scope: {
                aMax:'@',
                aMin:'@',
                aValue:"=",
                eOnchange :"&"
            },
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.tMax = parseInt($scope.aMax);
                $scope.tMin = parseInt($scope.aMin);
                if($scope.aValue == null || $scope.aValue == undefined){
                    $scope.aValue = $scope.tMin;
                }
                $scope.$watch('aValue',function (newVal,oldVal,$scope) {
                    if(isNaN(newVal) || $scope.tMax < newVal || $scope.tMin > newVal) {
                        $scope.aValue = oldVal;
                    }
                    if($scope.eOnchange != null && $scope.eOnchange != undefined){
                        $scope.eOnchange({"e":$scope.aValue});
                    }
                });
            }
        };
    })

    .directive('yDatePicker', function () {
        return {
            templateUrl:templatePath+'/DataEntry/datePickerTemplate.html',
            replace: true,
            require: '?ngModel',
            scope: {
                aValue:"=",
                aFormat:'@',
                eOnchange :"&"
            },
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.iOffset={"top":0,"left":0,"height":0,"width":0};
                if($scope.aValue != null && $scope.aValue != undefined && $scope.aValue != ""){
                    $scope.iCurrDate = new Date($scope.aValue);
                }else {
                    $scope.iCurrDate = new Date();
                }
                if($scope.aFormat == null || $scope.aFormat == undefined){
                    $scope.aFormat = "yyyy-MM-dd";
                }
                $scope.today = new Date();
                // $scope.aValue="";
                $scope.iCalArr = $scope.iCurrDate.getCalDays();
                $scope.$watch('iCurrDate',function (newVal,oldVal,$scope) {
                    if($scope.aValue != newVal.Format($scope.aFormat)){
                        $scope.aValue = newVal.Format($scope.aFormat);
                    }
                    $scope.iCalArr = newVal.getCalDays();
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
                    for(var i in scope.iOffset){
                        if(offset_para[i] == null || offset_para[i] == undefined || offset_para[i] == ""){
                            continue;
                        }
                        scope.iOffset[i] = offset_para[i];
                    }
                    if(outer_height != null && outer_height != undefined)
                        scope.iOffset.height = outer_height;
                    if(outer_width != null && outer_width != undefined)
                        scope.iOffset.width = outer_width;
                }

                /**
                 * 展现或隐藏选项列表
                 * @param e 下拉框本对象
                 */
                scope.showDatePickerDetail = function (e) {
                    if(scope.tShowDetail){
                        scope.tShowDetail = false;
                        return;
                    }else{
                        var tmpObj = $(tmpSelectObj);
                        copyOffset(tmpObj.offset(),tmpObj.outerHeight(),tmpObj.outerWidth());
                        scope.tShowDetail = true;
                    }
                };

                scope.previousMonths = function(){
                    scope.iCurrDate = scope.iCurrDate.addMonths(-1);
                };
                scope.nextMonths = function(){
                    scope.iCurrDate = scope.iCurrDate.addMonths(1);
                };

                scope.previousYears = function(){
                    scope.iCurrDate = scope.iCurrDate.addYears(-1);
                };
                scope.nextYears = function(){
                    scope.iCurrDate = scope.iCurrDate.addYears(1);
                };

                /**
                 * 展现或隐藏下拉框明细项
                 * @param id 被选中的ID值
                 */
                scope.select = function (selected_date) {
                    scope.tShowDetail = false;
                    scope.iCurrDate = selected_date;
                    scope.eValue = selected_date.Format(scope.iFormat);
                    if(scope.eOnchange != null && scope.eOnchange != undefined){
                        scope.eOnchange({"e":scope.eValue});
                    }
                    //console.log(selected_date);
                    //scope.$apply();
                };
                scope.regEvent = function(){

                    var tmpPreviousYears = $(element).find('.ant-calendar-prev-year-btn');

                    var tmpPreviousMonths = $(element).find('.ant-calendar-prev-month-btn');

                    var tmpNextMonths = $(element).find('.ant-calendar-next-month-btn');

                    var tmpNextYears = $(element).find('.ant-calendar-next-year-btn');

                    var tmpHeadSelect = $('div [head="select"]');
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
                    scope.tShowDetail = false;
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
    })

    .directive("yRadio",function(){
        return {
            restrict: 'E',
            templateUrl: templatePath+'/DataEntry/radioTemplate.html',
            scope: {
                aOptions : '=',
                aType : '@',
                // 展示类型 1 ： 2：
                aVerticality : "@",

                aSize : "@",
                aValue : "=",
                eOnchange :"&"
            },
            replace: true,
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.checkOn = function (e){
                    if(e.disabled){
                        return;
                    }
                    for(var i in $scope.aOptions){
                        var tmp = $scope.aOptions[i];
                        tmp.checked = false;
                    }
                    e.checked = true;
                    if($scope.eOnchange != null && $scope.eOnchange != undefined){
                        $scope.eOnchange({"e":e.id});
                    }
                };
            }
        };
    })

    .directive('yInput', function () {
        return {
            templateUrl:templatePath + '/DataEntry/inputTemplate.html',
            replace: true,
            require: '?ngModel',
            scope: {
                aMaxLength:'@',
                aMinLength:'@',
                aValue:"=",
                aWidth:'@',
                aIcon:'@',
                eOnchange :"&"
            },
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                // $scope.tMax = parseInt($scope.aMax);
                // $scope.tMin = parseInt($scope.aMin);
                // if($scope.aValue == null || $scope.aValue == undefined){
                //     $scope.aValue = $scope.tMin;
                // }
                $scope.$watch('aValue',function (newVal,oldVal,$scope) {
                    // if(isNaN(newVal) || $scope.tMax < newVal || $scope.tMin > newVal) {
                    //     $scope.aValue = oldVal;
                    // }
                    if($scope.eOnchange != null && $scope.eOnchange != undefined){
                        $scope.eOnchange({"e":newVal});
                    }
                });
            }
        };
    })

;


angular.module('yDataDisplay',[])
    .directive('yTable', function () {
        return {
            templateUrl:templatePath+'/DataDisplay/tableTemplate.html',
            replace: true,
            scope: {
                iHeadList:"=aHeadList",
                iRowList:"=aRowList"
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
    })
;

