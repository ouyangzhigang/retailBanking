'use strict';

var selectMessageResultBizHtml = require('./selectMessageResultBiz.html');
var selectMessageResultBizController = require('./selectMessageResultBiz.controller');

module.exports = function selectMessageResultBiz(){
    var directive = {
        restrict: 'AE',
        scope: {},
        template: selectMessageResultBizHtml,
        controller: selectMessageResultBizController,
        controllerAs: 'vm'
    }
    return directive;
}
