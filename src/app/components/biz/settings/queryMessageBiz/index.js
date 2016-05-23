'use strict';

var angular = require('angular');

var queryMessageBizDirective = require('./queryMessageBiz.directive');

/*require('./queryMessageBiz.skin.styl');
require('./queryMessageBiz.layout.styl');*/

var queryMessageBiz = angular.module('queryMessageBiz', []);

queryMessageBiz.directive('queryMessageBiz', ['$timeout', queryMessageBizDirective]);

module.exports = queryMessageBiz;
