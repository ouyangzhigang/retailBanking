'use strict';

var menuBarHtml = require('./menuNav.html');

module.exports = function menuBar() {
    var directive = {
        restrict: 'E',
        replace: true,
        template: menuBarHtml
    };

    return directive;
};
