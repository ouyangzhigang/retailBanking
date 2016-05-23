'use strict';

var angular = require('angular');

var queryMessageResultBizDirective = require('./queryMessageResultBiz.directive');

require('./queryMessageResultBiz.skin.styl');
/*require('./queryMessageResultBiz.layout.styl');*/
var pagination = require('pagination');

var queryMessageResultBiz = angular.module('queryMessageResultBiz', [
    pagination.name
]);

queryMessageResultBiz.directive('queryMessageResultBiz', queryMessageResultBizDirective);

module.exports = queryMessageResultBiz;
