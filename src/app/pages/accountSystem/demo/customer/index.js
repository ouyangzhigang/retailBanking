'use strict';

var customerController = require('./customer.controller');
var customerHtml = require('./customer.html');

require('./customer.skin.styl');
require('./customer.layout.styl');

var mod = angular.module('withdraw.customer', [])
    .controller('CustomerController', customerController);

module.exports = {
    module: mod,
    html: customerHtml,
    controller: customerController
};
