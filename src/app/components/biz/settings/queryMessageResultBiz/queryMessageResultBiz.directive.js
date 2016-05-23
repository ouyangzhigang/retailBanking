'use restrict';

var queryMessageResultBizHtml = require('./queryMessageResultBiz.html');
var queryMessageResultBizController = require('./queryMessageResultBiz.controller');

module.exports = function queryMessageResultBiz(){
    var directive = {
        restrict: 'AE',
        scope: {},
        template: queryMessageResultBizHtml,
        controller: queryMessageResultBizController,
        controllerAs: 'vm'
    }
    return directive;
}
