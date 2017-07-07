/**
 * Created by zeng on 17-7-5.
 */
var app = angular.module("mainApp",['yDataEntry','yDataDisplay','yFeedback','yun.feedback','yLayout','yNavigation']);
app.controller("mainCtrl", function ($scope) {
    $scope.frame_content="";
    $scope.formData={"a4":20};
    $scope.selectOptionsList=[{"id":"1","name":"zeng1","selected":true,"disabled":false},{"id":"2","name":"zeng2","selected":false,"disabled":false},{"id":"3","name":"zeng3","selected":false,"disabled":false}];
    $scope.radioboxList = [
        {"id":1,"name":"Apple","checked":true,"disabled":true},
        {"id":2,"name":"Banana","checked":false,"disabled":false},
        {"id":3,"name":"Peach","checked":false,"disabled":false}
    ];

    $scope.checkboxList = [
        {"id":1,"name":"Apple","checked":true,"disabled":true},
        {"id":2,"name":"Banana","checked":false,"disabled":true},
        {"id":3,"name":"Peach","checked":false,"disabled":false},
        {"id":4,"name":"Lemon","checked":false,"disabled":false},
        {"id":5,"name":"Mango","checked":false,"disabled":false}
    ];

    $scope.leftMenuList = $scope.defaultList;
    $scope.menuNav = function (e) {
        if(e && e.url){
            $scope.frame_content = e.url;
        }
    };

    $scope.topMuneList={
        "default":[
            {
                "id":1,
                "disabled":false,
                "icon": "setting",
                "title": "我的任务",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":11,
                        "disabled":false,
                        "icon": "setting",
                        "title": "任务列表",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            },
            {
                "id":2,
                "disabled":false,
                "icon": "appstore",
                "title": "样品信息录入",
                "show": false,
                "url": "/input/inputNumber/index.html",
                "child": [
                    {
                        "id":21,
                        "disabled":false,
                        "icon": "appstore",
                        "title": "合同评审",
                        "show": false,
                        "url": "/input/inputNumber/index.html",
                        "child": [

                        ]
                    },
                    {
                        "id":22,
                        "disabled":false,
                        "icon": "appstore",
                        "title": "样品管理确认",
                        "show": false,
                        "url": "/input/inputNumber/index.html",
                        "child": [

                        ]
                    }

                ]
            },
            {
                "id":3,
                "disabled":false,
                "icon": "download",
                "title": "标签打印",
                "show": false,
                "url": "/input/select/index.html",
                "child": []
            },
            {
                "id":4,
                "disabled":false,
                "icon": "download",
                "title": "样品分样",
                "show": false,
                "url": "/input/datepicker/index.html",
                "child": [
                    {
                        "id":41,
                        "disabled":false,
                        "icon": "download",
                        "title": "批分样",
                        "show": false,
                        "url": "/input/datepicker/index.html",
                        "child": []
                    }
                ]
            },
            {
                "id":5,
                "disabled":false,
                "icon": "download",
                "title": "制样管理",
                "show": false,
                "url": "#",
                "child": [
                    {
                        "id":51,
                        "disabled":false,
                        "icon": "download",
                        "title": "样品收样",
                        "show": false,
                        "url": "#",
                        "child": []
                    },
                    {
                        "id":52,
                        "disabled":false,
                        "icon": "download",
                        "title": "样品制样",
                        "show": false,
                        "url": "#",
                        "child": []
                    }
                ]
            },
            {
                "id":6,
                "disabled":false,
                "icon": "download",
                "title": "实验室收样",
                "show": false,
                "url": "#",
                "child": [
                    {
                        "id":61,
                        "disabled":false,
                        "icon": "download",
                        "title": "部门收样",
                        "show": false,
                        "url": "#",
                        "child": []
                    },
                    {
                        "id":62,
                        "disabled":false,
                        "icon": "download",
                        "title": "责任人收样",
                        "show": false,
                        "url": "#",
                        "child": []
                    }
                ]
            },
            {
                "id":7,
                "disabled":false,
                "icon": "download",
                "title": "任务安排",
                "show": false,
                "url": "#",
                "child": [
                    {
                        "id":71,
                        "disabled":false,
                        "icon": "download",
                        "title": "安排责任人",
                        "show": false,
                        "url": "#",
                        "child": [

                        ]
                    },
                    {
                        "id":72,
                        "disabled":false,
                        "icon": "download",
                        "title": "安排部门负责人",
                        "show": false,
                        "url": "#",
                        "child": [

                        ]
                    },
                    {
                        "id":73,
                        "disabled":false,
                        "icon": "download",
                        "title": "安排检测人",
                        "show": false,
                        "url": "#",
                        "child": [

                        ]
                    }
                ]
            },
            {
                "id":8,
                "disabled":false,
                "icon": "download",
                "title": "检验检测",
                "show": false,
                "url": "#",
                "child": [
                    {
                        "id":81,
                        "disabled":false,
                        "icon": "download",
                        "title": "检测结果登记",
                        "show": false,
                        "url": "#",
                        "child": []

                    },
                    {
                        "id":82,
                        "disabled":false,
                        "icon": "download",
                        "title": "检测结果复核",
                        "show": false,
                        "url": "#",
                        "child": []

                    },
                    {
                        "id":83,
                        "disabled":false,
                        "icon": "download",
                        "title": "检测结果审核",
                        "show": false,
                        "url": "#",
                        "child": []

                    }
                ]

            },
            {
                "id":9,
                "disabled":false,
                "icon": "download",
                "title": "检测结果评价",
                "show": false,
                "url": "#",
                "child": [
                    {
                        "id":91,
                        "disabled":false,
                        "icon": "download",
                        "title": "单项评价",
                        "show": false,
                        "url": "#",
                        "child": []
                    },
                    {
                        "id":92,
                        "disabled":false,
                        "icon": "download",
                        "title": "样品评价",
                        "show": false,
                        "url": "#",
                        "child": []
                    },
                    {
                        "id":93,
                        "disabled":false,
                        "icon": "download",
                        "title": "评价结论",
                        "show": false,
                        "url": "#",
                        "child": []
                    }
                ]
            },
            {
                "id":10,
                "disabled":false,
                "icon": "download",
                "title": "拟制报告",
                "show": false,
                "url": "#",
                "child": [
                    {
                        "id":101,
                        "disabled":false,
                        "icon": "download",
                        "title": "报告编制",
                        "show": false,
                        "url": "#",
                        "child": []
                    },
                    {
                        "id":102,
                        "disabled":false,
                        "icon": "download",
                        "title": "报告审核",
                        "show": false,
                        "url": "#",
                        "child": []
                    },
                    {
                        "id":103,
                        "disabled":false,
                        "icon": "download",
                        "title": "报告批准",
                        "show": false,
                        "url": "#",
                        "child": []
                    },
                    {
                        "id":104,
                        "disabled":false,
                        "icon": "download",
                        "title": "报告打印",
                        "show": false,
                        "url": "#",
                        "child": []
                    }
                ]
            },
            {
                "id":11,
                "disabled":false,
                "icon": "download",
                "title": "报告发放",
                "show": false,
                "url": "#",
                "child": [

                ]
            },
            {
                "id":12,
                "disabled":false,
                "icon": "download",
                "title": "报告归档",
                "show": false,
                "url": "#",
                "child": [

                ]
            }

        ]
    };

    $scope.leftMenuList = $scope.topMuneList.default;

    $scope.changeLeftmenu = function (e) {
        if(!e){
            return;
        }
        $scope.leftMenuList = $scope.topMuneList[e];

    }



    $scope.rowDataList=[
        {"name":"zeng1","age":"12","address":"浙江省杭州市"},
        {"name":"zeng2","age":"22","address":"浙江省湖州市"},
        {"name":"zeng3","age":"26","address":"浙江省嘉兴市"}
    ];

    $scope.headList=[{"name":"姓名","col":"name"},{"name":"年龄","col":"age"},{"name":"地址","col":"address"}];


});