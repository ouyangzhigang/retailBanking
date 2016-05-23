'use strict';

var customerContactHtml = require('./customerContactManager.html');
var customerContactCon = require('./customerContactManager.controller');

module.exports = function customerContactDirective(){
    var directive = {
        restrict: 'E',
        replace: true,
        template: customerContactHtml,
        scope: {},
        controller: customerContactCon,
        controllerAs: 'vm'
    };

    return directive;
};
