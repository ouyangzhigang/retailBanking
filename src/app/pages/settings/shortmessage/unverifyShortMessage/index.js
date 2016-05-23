'use strict';

var unverifyShortMessageController = require('./unverifyShortMessage.controller.js');
var unverifyShortMessageHtml = require('./unverifyShortMessage.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var tabel = require('table');
var pagination = require('pagination');
var modal = require('modal');

require('./unverifyShortMessage.styl');

var mod = angular.module('unverifyShortMessage', [
    panel.name,
    form.name,
    input.name,
    table.name,
    pagination.name,
    modal.name
]);

mod.controller('UnverifyShortMessageController', ['$scope', unverifyShortMessageController]);

module.exports = {
    module: mod,
    controller: unverifyShortMessageController,
    html: unverifyShortMessageHtml
}
