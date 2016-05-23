'use strict'

var queryOrganizationController = require('./queryOrganization.controller.js');
var queryOrganizationHtml = require('./queryOrganization.html');

var panel = require('panel');
var form = require('form');
var input = require('input');
var button = require('button');
var modal = require('modal');

require('./queryOrganization.styl');

var mod = angular.module('queryOrganization', [
    panel.name,
    form.name,
    input.name,
    button.name,
    modal.name
]);

mod.controller('QueryOrganizationController', ['$scope', queryOrganizationController]);

module.exports = {
    module: mod,
    controller: queryOrganizationController,
    html: queryOrganizationHtml
}
