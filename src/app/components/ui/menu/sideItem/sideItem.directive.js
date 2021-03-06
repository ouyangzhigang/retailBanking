'use strict';

var sideItemHtml = require('./sideItem.html');

module.exports = function sideItem() {
    var directive = {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: sideItemHtml
    };

    return directive;
};
