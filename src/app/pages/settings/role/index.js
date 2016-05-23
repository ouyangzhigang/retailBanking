'use strict';

var roleController = require('./role.controller.js');
var roleHtml = require('./role.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var button = require('button');
var modal = require('modal');

require('./role.styl');

var mod = angular.module('role', [
    panel.name,
    form.name,
    input.name,
    button.name
]);

mod.controller('RoleController', ['$scope', roleController]);

module.exports = {
    module: mod,
    controller: roleController,
    html: roleHtml
}
