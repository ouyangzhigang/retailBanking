'use strict'

var modifyEmployeeController = require('./modifyEmployee.controller.js');
var modifyEmployeeHtml = require('./modifyEmployee.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var button = require('button');

require('./modifyEmployee.styl');

var mod = angular.module('modifyEmployee', [
    panel.name,
    form.name,
    input.name,
    button.name
]);

mod.controller('ModifyEmployeeController', ['$scope', modifyEmployeeController]);

module.exports = {
    module: mod,
    controller: modifyEmployeeController,
    html: modifyEmployeeHtml
}
