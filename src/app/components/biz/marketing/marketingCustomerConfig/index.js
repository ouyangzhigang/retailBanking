'use strict';
var angular = require('angular');

var marketingCustomerDirective = require('./marketingCustomerConfig.directive');

var marketingCustomerConfig = angular.module('marketingCustomerConfig',[])
    .directive('marketingCustomer',marketingCustomerDirective);

module.exports = marketingCustomerConfig;
