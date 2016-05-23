'use strict';

var headerHtml = require('./header.html');

module.exports = function header() {
    var directive = {
        restrict: 'E',
        replace: true,
        template: headerHtml
    };

    return directive;
};
