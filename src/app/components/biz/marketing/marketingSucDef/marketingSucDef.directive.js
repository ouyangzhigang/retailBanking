'use strict';
var marketingSucDefHtml = require('./marketingSucDef.html');
// var marketingBaseElementController = require('./marketingBaseElement.controller');

module.exports = function() {
    var directive = {
        restrict: 'E',
        template:marketingSucDefHtml,
        scope:{},
        replace:true,
        bindToController: true,
        controller: marketingSucDefController,
        controllerAs:'vm'
    };

    function marketingSucDefController(){

    }

    return directive;
};
