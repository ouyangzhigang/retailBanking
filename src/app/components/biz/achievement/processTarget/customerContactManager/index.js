'use strict';

var customerContactDrective = require('./customerContactManager.directive');

var customerContactManager = angular.module('customerContactManager',[])
        .directive('customerContactManager',customerContactDrective);

module.exports = customerContactManager;
