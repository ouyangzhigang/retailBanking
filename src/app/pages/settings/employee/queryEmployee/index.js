'use strict'

var queryEmployeeController = require('./queryEmployee.controller.js');
var queryEmployeeHtml = require('./queryEmployee.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var button = require('button');
var modal = require('modal');
var pagination = require('pagination');

require('./queryEmployee.styl');

var mod = angular.module('queryEmployee', [
    panel.name,
    form.name,
    input.name,
    button.name,
    modal.name,
    pagination.name
]);

mod.controller('QueryEmployeeController', ['$scope', queryEmployeeController]);

module.exports = {
    module: mod,
    controller: queryEmployeeController,
    html: queryEmployeeHtml
}
