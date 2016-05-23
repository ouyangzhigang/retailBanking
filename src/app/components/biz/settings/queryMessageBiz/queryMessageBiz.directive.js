'use restrict';

var queryMessageBizHtml = require('./queryMessageBiz.html');
var queryMessageBizController = require('./queryMessageBiz.controller');

module.exports = function queryMessageBiz(){
    var directive = {
        restrict: 'AE',
        scope:{},
        template: queryMessageBizHtml,
        controller: queryMessageBizController,
        controllerAs: 'vm'
    }
    return directive;
}
