/**
 * Created by zeng on 17-6-23.
 */
var app = angular.module("myApp",['yInputModule']);
app.controller("menuCtrl", function ($scope) {
    $scope.list = [
        {
            "id":1,
            "disabled":false,
            "icon": "setting",
            "title": "菜单1",
            "url": "#",
            "show": false,
            "child": []
        },
        {
            "id":2,
            "disabled":true,
            "icon": "appstore",
            "title": "菜单2",
            "show": false,
            "url": "#",
            "child": [{
                "id":4,
                "disabled":false,
                "icon": "heart",
                "title": "子菜单1",
                "url": "#",
                "show": false,
                "child": [{
                    "id":7,
                    "disabled":false,
                    "icon": "tag",
                    "title": "孙菜单1",
                    "url": "#",
                    "show": false,
                    "child": []
                },
                    {
                        "id":8,
                        "disabled":false,
                        "icon": "mail",
                        "title": "孙菜单2",
                        "show": false,
                        "url": "#",
                        "child": [{
                            "id":10,
                            "disabled":false,
                            "icon": "tag",
                            "title": "孙孙菜单1",
                            "url": "#",
                            "show": false,
                            "child": []
                        },
                            {
                                "id":12,
                                "disabled":false,
                                "icon": "mail",
                                "title": "孙孙菜单2",
                                "show": false,
                                "url": "#",
                                "child": []
                            },
                            {
                                "id":13,
                                "disabled":false,
                                "icon": "mobile",
                                "title": "孙孙菜单3",
                                "show": false,
                                "url": "#",
                                "child": [{
                                    "id":14,
                                    "disabled":false,
                                    "icon": "tag",
                                    "title": "孙孙孙菜单1",
                                    "url": "#",
                                    "show": false,
                                    "child": []
                                },
                                    {
                                        "id":15,
                                        "disabled":false,
                                        "icon": "mail",
                                        "title": "孙孙孙菜单2",
                                        "show": false,
                                        "url": "#",
                                        "child": []
                                    },
                                    {
                                        "id":6,
                                        "disabled":false,
                                        "icon": "mobile",
                                        "title": "孙孙孙菜单3",
                                        "show": false,
                                        "url": "#",
                                        "child": []
                                    }]
                            }]
                    },
                    {
                        "id":9,
                        "disabled":false,
                        "icon": "mobile",
                        "title": "孙菜单3",
                        "show": false,
                        "url": "#",
                        "child": []
                    }]
            },
                {
                    "id":5,
                    "disabled":false,
                    "icon": "poweroff",
                    "title": "子菜单2",
                    "show": false,
                    "url": "#",
                    "child": []
                },
                {
                    "id":6,
                    "disabled":false,
                    "icon": "star",
                    "title": "子菜单3",
                    "show": false,
                    "url": "#",
                    "child": []
                }]
        },
        {
            "id":3,
            "disabled":true,
            "icon": "download",
            "title": "菜单3",
            "show": false,
            "url": "#",
            "child": []
        }
    ];
    $scope.showdel = false;

    $scope.cc = function () {
        $scope.age=3;
    }
});