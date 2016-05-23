'use strict';

var angular = require('angular');

var selectMessageResultBizDirective = require('./selectMessageResultBiz.directive');

var pagination = require('pagination');

var selectMessageResultBiz = angular.module('selectMessageResultBiz', [
    pagination.name
]);

selectMessageResultBiz.directive('selectMessageResultBiz', selectMessageResultBizDirective);

module.exports = selectMessageResultBiz;
