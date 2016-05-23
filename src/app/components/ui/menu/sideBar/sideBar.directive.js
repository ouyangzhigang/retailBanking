'use strict';

var sideBarHtml = require('./sideBar.html');

module.exports = function sideBar() {
    var directive = {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: sideBarHtml
    };

    return directive;
};
