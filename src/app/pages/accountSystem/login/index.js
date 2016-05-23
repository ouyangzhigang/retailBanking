'use strict';

var loginController = require('./login.controller.js');
var loginHtml = require('./login.html');

var paging = require('pagination');
var funnel = require('_funnel');
var modal = require('modal');
var formInput = require('form/form-input');
var matrix = require('matrix');
var tab = require('_tabs');
var dateRange = require('dateRange');
require('./login.styl');

var mod = angular.module('login', [
    paging.name,
    funnel.name,
    modal.name,
    formInput.name,
    matrix.name,
    tab.name,
    dateRange.name
]);

mod.controller('LoginController', ['$state', 'ModalService', loginController]);

module.exports = {
    module: mod,
    controller: loginController,
    html: loginHtml
};
