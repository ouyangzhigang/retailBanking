'use strict'

var detailEmployController = require('./detailEmploy.controller.js');
var detailEmployHtml = require('./detailEmploy.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var button = require('button');

require('./detailEmploy.styl');

var mod = angular.module('detailEmploy', [
    panel.name,
    form.name,
    input.name,
    button.name
]);

mod.controller('DetailEmployController', ['$scope', detailEmployController]);

module.exports = {
    module: mod,
    controller: detailEmployController,
    html: detailEmployHtml
}
