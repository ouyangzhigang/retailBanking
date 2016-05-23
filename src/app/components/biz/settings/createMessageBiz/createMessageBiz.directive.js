'use restrict';

var createMessageBizHtml = require('./createMessageBiz.html');
var createMessageBizController = require('./createMessageBiz.controller');

module.exports = function createMessageBiz(){
    var directive = {
        restrict: 'AE',
        scope:{},
        template: createMessageBizHtml,
        controller: createMessageBizController,
        controllerAs: 'vm'
    }
    return directive;
}
