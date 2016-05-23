'use strict';

var angular = require('angular');

var createMessageBizDirective = require('./createMessageBiz.directive');

require('./createMessageBiz.skin.styl');
require('./createMessageBiz.layout.styl');

var createMessageBiz = angular.module('createMessageBiz', []);

createMessageBiz.directive('createMessageBiz', ['$timeout', createMessageBizDirective]);

module.exports = createMessageBiz;


