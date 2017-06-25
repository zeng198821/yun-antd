/**
 * Created by zeng on 17-6-23.
 */

angular.module('yInputModule',[]).directive('ySelect', function () {
    return {
        templateUrl:'template.html',
        replace: true,
        require: '?ngModel',
        scope: {
            max:'@',
            min:'@',
            tValue:'=pValue',
            tList :'=pList'
        },
        transclude: true,
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.vOffset={"top":0,"left":0,"height":0,"width":0};
            $scope.vDefaultVal = {"id":"","name":"","selected":true,"disabled":false};
            $scope.showDetail = false;
        },
        link: function (scope, element, attrs) {
            /**
             * 选项列表对象
             */
            var tmpDetailObj = $(element).find('.ant-select-dropdown');
            var tmpSelectObj = $(element).find('.ant-select');






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
            scope.showSelectDetail = function (e) {
                if(scope.showDetail){
                    scope.showDetail = false;
                    return;
                }else{
                    var tmpObj = $(tmpSelectObj);
                    copyOffset(tmpObj.offset(),tmpObj.outerHeight(),tmpObj.outerWidth());
                    scope.showDetail = true;
                }
                //scope.$apply();
            }

            /**
             * 展现或隐藏下拉框明细项
             * @param id 被选中的ID值
             */
            scope.select = function (id) {
                for(var i=0;i<scope.tList.length;i++){
                    var tmp = scope.tList[i];
                    if(id === tmp.id){
                        tmp.selected=true;
                        scope.tValue = id;
                        scope.vDefaultVal.selected = tmp.selected;
                        scope.vDefaultVal.id = tmp.id;
                        scope.vDefaultVal.name = tmp.name;
                        scope.vDefaultVal.disabled = tmp.disabled;
                    }else{
                        tmp.selected=false;
                    }
                }
                scope.showDetail = false;
                //scope.$apply();
            }



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
                scope.showSelectDetail(e);
            });

        }
    };
});