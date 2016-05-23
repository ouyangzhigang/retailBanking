'use strict';

var dateRangeDirective = require('./dateRange.directive');

// require('./button.skin.styl');
// require('./button.layout.styl');

var dateRange = angular.module('dateRange',['ui.bootstrap'])
    .directive('dateRange', dateRangeDirective);

module.exports = dateRange;
