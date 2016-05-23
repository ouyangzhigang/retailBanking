'use strict';

var selectShortMessageController = require('./selectShortMessage.controller');
var selectShortMessageHtml = require('./selectShortMessage.html');

require('./selectShortMessage.styl');

var queryMessageBiz = require('settings/queryMessageBiz');
var selectMessageResultBiz = require('settings/selectMessageResultBiz');

var mod = angular.module('selectShortMessage', [
    queryMessageBiz.name,
    queryMessageBiz.name
]);

mod.controller('SelectShortMessageController', selectShortMessageController);

module.exports = {
    module: mod,
    controller: selectShortMessageController,
    html: selectShortMessageHtml
}
