'use strict';

var loanHtml = require('./loan.html');
var loanController = require('./loan.controller');

require('./loan.layout.styl');
require('./loan.skin.styl');

var panel = require('panel');

var mod = angular.module('loan', [panel.name])
    .controller('LoanController', loanController);

module.exports = {
    module: mod,
    html: loanHtml,
    controller: loanController
};
