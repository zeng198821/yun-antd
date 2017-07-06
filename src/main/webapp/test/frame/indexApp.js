/**
 * Created by zeng on 17-7-5.
 */
var app = angular.module("mainApp",['yDataEntry','yDataDisplay','yFeedback','yun.feedback','yLayout','yNavigation']);
app.controller("mainCtrl", function ($scope) {
    $scope.frame_content="";


    $scope.leftMenuList = $scope.defaultList;
    $scope.menuNav = function (e) {
        if(e && e.url){
            $scope.frame_content = e.url;
        }
    };

    $scope.topMuneList={
        "other":[
            {
                "id":1,
                "disabled":false,
                "icon": "setting",
                "title": "抽样与样品处理",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":11,
                        "disabled":false,
                        "icon": "setting",
                        "title": "抽/采样计划",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":12,
                        "disabled":false,
                        "icon": "setting",
                        "title": "抽/采样实施",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":13,
                        "disabled":false,
                        "icon": "setting",
                        "title": "送检样品一览表",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":14,
                        "disabled":false,
                        "icon": "setting",
                        "title": "留样样品一览表",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":15,
                        "disabled":false,
                        "icon": "setting",
                        "title": "副样样品一览表",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":16,
                        "disabled":false,
                        "icon": "setting",
                        "title": "留样样品处理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":17,
                        "disabled":false,
                        "icon": "setting",
                        "title": "副样样品处理",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            },
            {
                "id":2,
                "disabled":false,
                "icon": "setting",
                "title": "结果质量控制",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":21,
                        "disabled":false,
                        "icon": "setting",
                        "title": "质量控制管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":22,
                        "disabled":false,
                        "icon": "setting",
                        "title": "质量溯源",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            },
            {
                "id":3,
                "disabled":false,
                "icon": "setting",
                "title": "结果报告",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":31,
                        "disabled":false,
                        "icon": "setting",
                        "title": "报告更改申请审批",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":32,
                        "disabled":false,
                        "icon": "setting",
                        "title": "支持文件",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            }

        ],
        "support":[
            {
                "id":1,
                "disabled":false,
                "icon": "setting",
                "title": "人员",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":11,
                        "disabled":false,
                        "icon": "setting",
                        "title": "用户管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":12,
                        "disabled":false,
                        "icon": "setting",
                        "title": "权限管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":13,
                        "disabled":false,
                        "icon": "setting",
                        "title": "角色管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":14,
                        "disabled":false,
                        "icon": "setting",
                        "title": "部门管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":15,
                        "disabled":false,
                        "icon": "setting",
                        "title": "工作记录",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":16,
                        "disabled":false,
                        "icon": "setting",
                        "title": "培训管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":17,
                        "disabled":false,
                        "icon": "setting",
                        "title": "考核记录",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":18,
                        "disabled":false,
                        "icon": "setting",
                        "title": "科研成果",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":19,
                        "disabled":false,
                        "icon": "setting",
                        "title": "岗位变更",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":19,
                        "disabled":false,
                        "icon": "setting",
                        "title": "持证仪器",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":19,
                        "disabled":false,
                        "icon": "setting",
                        "title": "证明材料",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":19,
                        "disabled":false,
                        "icon": "setting",
                        "title": "人员技术档案",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":19,
                        "disabled":false,
                        "icon": "setting",
                        "title": "其他",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            },
            {
                "id":2,
                "disabled":false,
                "icon": "setting",
                "title": "设备",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":21,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设备申购管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":22,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设备台帐管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":23,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设备计量管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":24,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设备报废管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":25,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设备维修管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":26,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设备期间核查",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":27,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设备领用管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":28,
                        "disabled":false,
                        "icon": "setting",
                        "title": "标准物质管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":29,
                        "disabled":false,
                        "icon": "setting",
                        "title": "自备质量控制管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            },
            {
                "id":3,
                "disabled":false,
                "icon": "setting",
                "title": "物料",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":31,
                        "disabled":false,
                        "icon": "setting",
                        "title": "服务和供应品采购",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":32,
                        "disabled":false,
                        "icon": "setting",
                        "title": "标准物质管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            },
            {
                "id":4,
                "disabled":false,
                "icon": "setting",
                "title": "方法",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":41,
                        "disabled":false,
                        "icon": "setting",
                        "title": "检验方法管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":42,
                        "disabled":false,
                        "icon": "setting",
                        "title": "方法定价",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":43,
                        "disabled":false,
                        "icon": "setting",
                        "title": "方法项目组管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            },
            {
                "id":5,
                "disabled":false,
                "icon": "setting",
                "title": "环境",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":51,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设施场所管理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":52,
                        "disabled":false,
                        "icon": "setting",
                        "title": "设施和环境",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":53,
                        "disabled":false,
                        "icon": "setting",
                        "title": "三废处理",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":54,
                        "disabled":false,
                        "icon": "setting",
                        "title": "支持文件",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            }

        ],
        "field":[
            {
                "id":1,
                "disabled":false,
                "icon": "setting",
                "title": "表单管理",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":11,
                        "disabled":false,
                        "icon": "setting",
                        "title": "表单列表",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":12,
                        "disabled":false,
                        "icon": "setting",
                        "title": "创建表单",
                        "url": "#",
                        "show": true,
                        "child": []
                    },
                    {
                        "id":13,
                        "disabled":false,
                        "icon": "setting",
                        "title": "流程设计",
                        "url": "#",
                        "show": true,
                        "child": []
                    }
                ]
            },
            {
                "id":2,
                "disabled":false,
                "icon": "setting",
                "title": "流程管理",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":21,
                        "disabled":false,
                        "icon": "setting",
                        "title": "流程列表",
                        "url": "#",
                        "show": false,
                        "child": []
                    },
                    {
                        "id":2,
                        "disabled":false,
                        "icon": "setting",
                        "title": "实例流程",
                        "url": "#",
                        "show": false,
                        "child": []
                    },
                    {
                        "id":3,
                        "disabled":false,
                        "icon": "setting",
                        "title": "流程设计",
                        "url": "#",
                        "show": false,
                        "child": []
                    }
                ]
            },
            {
                "id":3,
                "disabled":false,
                "icon": "setting",
                "title": "规则管理",
                "url": "#",
                "show": false,
                "child": []
            },
            {
                "id":4,
                "disabled":false,
                "icon": "setting",
                "title": "系统高级配置",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":41,
                        "disabled":false,
                        "icon": "setting",
                        "title": "数据库配置",
                        "url": "#",
                        "show": false,
                        "child": []
                    },
                    {
                        "id":42,
                        "disabled":false,
                        "icon": "setting",
                        "title": "系统基础信息导入",
                        "url": "#",
                        "show": false,
                        "child": []
                    },
                    {
                        "id":3,
                        "disabled":false,
                        "icon": "setting",
                        "title": "消息通知模板",
                        "url": "#",
                        "show": false,
                        "child": []
                    }
                ]
            },
            {
                "id":5,
                "disabled":false,
                "icon": "setting",
                "title": "评价结论定义",
                "url": "#",
                "show": true,
                "child": []
            },
            {
                "id":6,
                "disabled":false,
                "icon": "setting",
                "title": "字典管理",
                "url": "#",
                "show": false,
                "child": [
                    {
                        "id":61,
                        "disabled":false,
                        "icon": "setting",
                        "title": "文字模板",
                        "url": "#",
                        "show": false,
                        "child": []
                    }
                ]
            },
            {
                "id":7,
                "disabled":false,
                "icon": "setting",
                "title": "页面管理",
                "url": "#",
                "show": false,
                "child": []
            },
            {
                "id":8,
                "disabled":false,
                "icon": "setting",
                "title": "日志管理",
                "url": "#",
                "show": false,
                "child": []
            },
            {
                "id":9,
                "disabled":false,
                "icon": "setting",
                "title": "系统配置",
                "url": "#",
                "show": false,
                "child": []
            },
            {
                "id":10,
                "disabled":false,
                "icon": "setting",
                "title": "文件管理",
                "url": "#",
                "show": false,
                "child": []
            }
        ],
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


});