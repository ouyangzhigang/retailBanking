'use strict';
var angular = require('angular');

var marketingRequireDirective = require('./marketingRequire.directive');

var marketingRequire = angular.module('marketingRequire',[])
    .directive('marketingRequire',marketingRequireDirective);

module.exports = marketingRequire;
