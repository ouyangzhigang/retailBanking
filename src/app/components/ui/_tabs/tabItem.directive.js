/**
 * Created by ShaunJ on 16/5/16.
 */
'use strict';
// var cfoTab = require('./tab.directive');

module.exports = function() {
    var directive = {
        require: '^cfoTab',
        restrict:'E',
        transclude: true,
        template:
            '<div ng-show="active" class="cfo-tab-body" ng-transclude></div>',
        replace: true,
        scope: {
            value: '@',
            isActive:'@active'
        },
        link: function(scope, element, attrs, tabController) {
            scope.active = (scope.isActive == 'true');
            tabController.addTab(scope);
        }
    };

    return directive;
};
