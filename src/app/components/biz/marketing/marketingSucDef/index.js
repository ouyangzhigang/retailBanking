'use strict';
var angular = require('angular');

var marketingSucDefDirective = require('./marketingSucDef.directive');

var successDef = angular.module('marketingSucDef',[])
    .directive('successDef',marketingSucDefDirective);
    // .controller('marketingBaseElementController',marketActivityController);

module.exports = successDef;
