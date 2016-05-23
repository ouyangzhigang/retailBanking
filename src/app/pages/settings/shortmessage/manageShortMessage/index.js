'use strict';

var manageShortMessageController = require('./manageShortMessage.controller.js');
var manageShortMessageHtml = require('./manageShortMessage.html');

require('./manageShortMessage.styl');

var queryMessageBiz = require('settings/queryMessageBiz');
var queryMessageResultBiz = require('settings/queryMessageResultBiz');

var mod = angular.module('manageShortMessage', [
    queryMessageBiz.name,
    queryMessageResultBiz.name
]);

mod.controller('ManageShortMessageController', manageShortMessageController);

module.exports = {
    module: mod,
    controller: manageShortMessageController,
    html: manageShortMessageHtml
}
