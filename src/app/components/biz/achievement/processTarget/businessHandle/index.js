'use strict';

var businessDirective = require('./businessHandle.directive');

var business = angular.module('business', [])
    .directive('businessHandle', businessDirective);

module.exports = 　business;
