/**
 * Created by zeng on 17/1/30.
 */
angular.module('yCodeDescModule',[]).directive("yCodeDesc", function () {
    return {
        templateUrl: 'y-codeDesc-Temp.html',
        scope: {
        },
        controller: function () {

        },
        link: function (scope, element, attrs) {

            var tmpelementBtn = element;

            //tmpelementBtn.bind('click', clickskin);
            function clickskin() {
                tmpelementBtn.addClass("ant-btn-clicked");

                setTimeout(unClicked, 500);

            };
            function unClicked() {
                tmpelementBtn.removeClass("ant-btn-clicked");
            }
        }
    };
});