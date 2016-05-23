'use strict'

var modifyOrgationController = require('./modifyOrgation.controller.js');
var modifyOrgationHtml = require('./modifyOrgation.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var button = require('button');

require('./modifyOrgation.styl');

var mod = angular.module('modifyOrgation', [
    panel.name,
    form.name,
    input.name,
    button.name
]);

mod.controller('ModifyOrgationController', ['$scope', modifyOrgationController]);

module.exports = {
    module: mod,
    controller: modifyOrgationController,
    html: modifyOrgationHtml
}
