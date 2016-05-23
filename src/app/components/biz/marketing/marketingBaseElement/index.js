'use strict';
var angular = require('angular');

var marketingBaseDirective = require('./marketingBase.directive');

var baseElement = angular.module('marketingBaseElement',[])
    .directive('marketingBase',marketingBaseDirective);

module.exports = baseElement;
