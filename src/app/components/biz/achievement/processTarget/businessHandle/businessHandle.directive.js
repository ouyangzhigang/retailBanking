'use strict';

var businessHandleHtml = require('./businessHandle.html');

module.exports = function businessDirective() {
    var directive = {
        restrict: 'E',
        replace: true,
        template: businessHandleHtml,
        controller: BusinessHanndleController,
        controllerAs: 'vm',
        scope: {}
    };
    return directive;

    function BusinessHandleController() {
        var vm = this;
    }
};
