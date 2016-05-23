'use strict';

/* services */
var CommonService = require('./services');

/* ui-directives */
var echart = require('./directives/ui-directives/echart.directive');
var ueditor = require('./directives/ui-directives/ueditor.directive.js');

/* validation-directives */

/* filters */
var currencyFormat = require('./filters/currencyFormat.filter');

/* styles */
// require('/styles/common.styl');
// require('./styles/fonts.styl');
// require('./variable.styl');

var common = angular.module('app.common', [CommonService.name]);

common
    .directive('echart', echart)
    .directive('ueditor', ueditor)
    .filter('currencyFormat', currencyFormat);

module.exports = common;
