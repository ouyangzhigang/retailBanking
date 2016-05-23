'use strict';

var verifiedShortMessageController = require('./verifiedShortMessage.controller.js');
var verifiedShortMessageHtml = require('./verifiedShortMessage.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var tabel = require('table');
var pagination = require('pagination');

require('./verifiedShortMessage.styl');

var mod = angular.module('verifiedShortMessage', [
    panel.name,
    form.name,
    input.name,
    table.name,
    pagination.name
]);

mod.controller('VerifiedShortMessageController', ['$scope', verifiedShortMessageController]);

module.exports = {
    module: mod,
    controller: verifiedShortMessageController,
    html: verifiedShortMessageHtml
}
