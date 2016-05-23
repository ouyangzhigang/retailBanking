'use strict';

var iconHtml = require('./icon.html');

module.exports = function icon() {
    var directive = {
        restrict: 'E',
        replace: true,
        scope: {
            name: '=',
            src: '='
        },
        template: iconHtml
    };

    return directive;
};
