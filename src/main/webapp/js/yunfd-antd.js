/**
 * Created by zeng on 17-7-3.
 */

var templatePath='/template';


angular.module('yDataEntry',[])

    .directive('yCheckbox', function () {
        return {
            templateUrl:templatePath+'/DataEntry/checkBoxTemplate.html',
            replace: true,
            require: '?ngModel',
            scope: {
                iOptions : '=aOptions',
                iValue : '=aValue',
                iOnChange :"&eOnchange",
                iComm : '=aComm'
            },
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.countValue = function () {
                    var tmpValue="";
                    for(var i in $scope.iOptions){
                        var tmp = $scope.iOptions[i];
                        if(tmp.checked){
                            tmpValue = tmpValue + tmp.id+",";
                        }
                    }
                    tmpValue = tmpValue.substring(0,tmpValue.length - 1);
                    $scope.iValue = tmpValue;
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
                    if($scope.iOnChange != null && $scope.iOnChange != undefined){
                            //函数回调是需要注意拼装形参列表
                            $scope.iOnChange({"e":e});
                    }
                };
                $scope.checkAll = function () {
                    for(var i in $scope.iOptions){
                        $scope.checkOn($scope.iOptions[i],true);
                    }
                };
                $scope.checkNone = function () {
                    for(var i in $scope.iOptions){
                        $scope.checkOn($scope.iOptions[i],false);
                    }
                };
                $scope.checkReverse = function () {
                    for(var i in $scope.iOptions){
                        $scope.checkOn($scope.iOptions[i]);
                    }
                };
                $scope.disabledAll = function () {
                    for(var i in $scope.iOptions){
                        var tmp = $scope.iOptions[i];
                        tmp.disabled = true;
                    }
                };
                $scope.disableNone = function () {
                    for(var i in $scope.iOptions){
                        var tmp = $scope.iOptions[i];
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
                iMax:'@aMax',
                iMin:'@aMin',
                iValue:"=aValue",
                iOnchange :"&eOnchange"
            },
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.vMax = parseInt($scope.iMax);
                $scope.vMin = parseInt($scope.iMin);
                if($scope.iValue == null || $scope.iValue == undefined){
                    $scope.iValue = $scope.vMin;
                }
                $scope.$watch('iValue',function (newVal,oldVal,$scope) {
                    if(isNaN(newVal) || $scope.vMax < newVal || $scope.vMin > newVal) {
                        $scope.iValue = oldVal;
                    }
                    if($scope.iOnchange != null && $scope.iOnchange != undefined){
                        $scope.iOnchange({"e":$scope.iValue});
                    }
                });
            },
            link: function (scope, element, attrs) {
                scope.up = function () {
                    if(scope.vMax >= scope.iValue && scope.vMin <= scope.iValue){
                        scope.iValue++;
                    }
                }
                scope.down = function () {
                    if(scope.vMax >= scope.iValue && scope.vMin <= scope.iValue){
                        scope.iValue--;
                    }
                }
            }
        };
    })

    .directive('yDatePicker', function () {
        return {
            templateUrl:templatePath+'/DataEntry/datePickerTemplate.html',
            replace: true,
            require: '?ngModel',
            scope: {
                iValue:"=aValue",
                iFormat:'@aFormat',
                iOnchange :"&eOnchange"
            },
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.iOffset={"top":0,"left":0,"height":0,"width":0};
                if($scope.iValue != null && $scope.iValue != undefined){
                    $scope.iCurrDate = new Date($scope.iValue);
                }else {
                    $scope.iCurrDate = new Date();
                }
                if($scope.iFormat == null || $scope.iFormat == undefined){
                    $scope.iFormat = "yyyy-MM-dd";
                }
                $scope.today = new Date();
                $scope.iValue="";
                $scope.iCalArr = $scope.iCurrDate.getCalDays();
                $scope.$watch('iCurrDate',function (newVal,oldVal,$scope) {
                    if($scope.iValue != newVal.Format($scope.iFormat)){
                        $scope.iValue = newVal.Format($scope.iFormat);
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
                    if(scope.showDetail){
                        scope.showDetail = false;
                        return;
                    }else{
                        var tmpObj = $(tmpSelectObj);
                        copyOffset(tmpObj.offset(),tmpObj.outerHeight(),tmpObj.outerWidth());
                        scope.showDetail = true;
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
                    scope.showDetail = false;
                    scope.iCurrDate = selected_date;
                    scope.iValue = selected_date.Format(scope.iFormat);
                    if(scope.iOnchange != null && scope.iOnchange != undefined){
                        scope.iOnchange({"e":scope.iValue});
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
    })

    .directive("yRadio",function(){
        return {
            restrict: 'E',
            templateUrl: templatePath+'/DataEntry/radioTemplate.html',
            scope: {
                iOptions : '=aOptions',
                iType : '@aType',
                // 展示类型 1 ： 2：
                iVerticality : "@aVerticality",

                iSize : "@aSize",
                iValue : "=aValue",
                iOnchange :"&eOnchange"
            },
            replace: true,
            transclude: true,
            controller: function ($scope,$element,$attrs,$transclude) {
                $scope.checkOn = function (e){
                    if(e.disabled){
                        return;
                    }
                    for(var i in $scope.iOptions){
                        var tmp = $scope.iOptions[i];
                        tmp.checked = false;
                    }
                    e.checked = true;
                    if($scope.iOnchange != null && $scope.iOnchange != undefined){
                        $scope.iOnchange({"e":e.id});
                    }
                };
            }
        };
    });



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

angular.module('yFeedback',[])
    .directive('yMessage',function () {
        return{
            templateUrl:templatePath+'/Feedback/messageTemplate.html',
            replace: true,
            require: '?ngModel',
            scope: {
                iTime:'@aTime',
                iType:"@aType",
                iText:'@aText',
            },
            transclude: true,
            controller: function ($scope) {
                if($scope.iTime==""){
                    $scope.tTime=1500;
                }else
                {
                    $scope.tTime=parseInt($scope.iTime)*1000;
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
                iShow:'=aShow'
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
                iType : "@aType",
                // 宽度
                iWidth : "@aWidth",
                iCrude : "@aCrude",
                // 初始百分比
                iPercent : "=aPercent",
                // 颜色
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
                    $scope.tDasharray = 295.31 / 100 * $scope.rPercent;
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
    })
;