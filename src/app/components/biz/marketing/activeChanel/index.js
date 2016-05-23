'use strict';
var angular = require('angular');

var activeChanelDirective = require('./activeChanel.directive');

var activeChanel = angular.module('activeChanel',[])
    .directive('activeChanel',activeChanelDirective);

module.exports = activeChanel;
