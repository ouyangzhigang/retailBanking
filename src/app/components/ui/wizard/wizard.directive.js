'use strict';

var wizardHtml = require('/wizard.html');

module.exports = function() {
    var directive = {
        restrict: 'E',
        replace: false,
        scope: {
            items: '='
        },
        template: wizardHtml,
        link: linkFunc
    };

    return directive;

    function linkFunc() {

    }
};
