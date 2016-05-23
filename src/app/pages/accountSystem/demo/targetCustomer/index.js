'use strict';

var targetCustomerController = require('./targetCustomer.controller');
var targetCustomerHtml = require('./targetCustomer.html');

require('./targetCustomer.skin.styl');
require('./targetCustomer.layout.styl');

var mod = angular.module('withdraw.targetCustomer', [])
    .controller('TargetCustomerController', targetCustomerController);

module.exports = {
    module: mod,
    html: targetCustomerHtml,
    controller: targetCustomerController
};
