'use strict'

var detailOrginationController = require('./detailOrgination.controller.js');
var detailOrginationHtml = require('./detailOrgination.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var button = require('button');

require('./detailOrgination.styl');

var mod = angular.module('detailOrgination', [
    panel.name,
    form.name,
    input.name,
    button.name
]);

mod.controller('DetailOrginationController', ['$scope', detailOrginationController]);

module.exports = {
    module: mod,
    controller: detailOrginationController,
    html: detailOrginationHtml
}
