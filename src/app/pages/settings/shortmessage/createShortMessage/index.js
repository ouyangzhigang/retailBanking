'use strict';

var createShortMessageController = require('./createShortMessage.controller.js');
var createShortMessageHtml = require('./createShortMessage.html');

require('./createShortMessage.styl');

var createMessageBiz = require('settings/createMessageBiz');

var mod = angular.module('createShortMessage', [
    createMessageBiz.name
]);

mod.controller('CreateShortMessageController',  [createShortMessageController]);

module.exports = {
    module: mod,
    controller: createShortMessageController,
    html: createShortMessageHtml
};
