'use strict';

var businessDetailDirective = require('./businessHandleDetail.directive');

//引用插件
var page = require('pagination');

var businessDetail = angular.module('businessHandleDetail', [page.name])
    .directive('businessHandleDetail', businessDetailDirective);

module.exports = businessDetail;
