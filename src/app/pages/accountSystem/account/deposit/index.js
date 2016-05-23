'use strict';

var depositController = require('./deposit.controller.js');
var depositHtml = require('./deposit.html');

require('./deposit.styl');

var mod = module.exports = angular.module('deposit', []);

mod.controller('DepositController', ['$scope', depositController]);

module.exports = {
    module: mod,
    controller: depositController,
    html: depositHtml
};
