'use strict';

var panelHtml = require('./panel.html');

module.exports = function panel() {
    var directive = {
        restrict: 'E',
        transclude: {
            'title': '?panelTitle',
            'body': 'panelBody',
            'footer': '?panelFooter'
        },
        link: linkFunc,
        scope: {
            name: '@',
            class: '@',
            img: '@',
            show: '@',
            hasIcon: '@'
        },
        template: panelHtml
    };
    return directive;

    function linkFunc(scope) {

        if (!scope.img && scope.hasIcon) {
              scope.img = 'http://www.yooyoo360.com/photo/2009-1-1/20090112124726732.jpg';
        }

        if (scope.img) {
            scope.panelImg = {
                'background-image': 'url("" + scope.img + "")'
            };
        }

    }
};
