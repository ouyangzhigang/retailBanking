'use strict';

module.exports = function ueditor() {
    var directive = {
        restrict: 'AE',
        template: '<div class="ueditor" ng-model="content" config="options"></div>',
        replace: false,
        scope: {
            options: '='        // 绑定指令外部的duration属性,控制可重发消息的时间
        }
    };

    return directive;
};
