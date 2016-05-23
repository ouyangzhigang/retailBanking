'use strict'

var queryUnemployeeController = require('./queryUnemployee.controller.js');
var queryUnemployeeHtml = require('./queryUnemployee.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var button = require('button');
var modal = require('modal');
var pagination = require('pagination');

require('./queryUnemployee.styl');

var mod = angular.module('queryUnemployee', [
    panel.name,
    form.name,
    input.name,
    button.name,
    modal.name,
    pagination.name
]);

mod.controller('QueryUnemployeeController', ['$scope', queryUnemployeeController]);

module.exports = {
    module: mod,
    controller: queryUnemployeeController,
    html: queryUnemployeeHtml
}
