'use strict';
var angular = require('angular');

var contactantChanelDirective = require('./contactant.directive');

var contactantChanel = angular.module('contactantChanel',[])
    .directive('contactChanel',contactantChanelDirective);
    // .controller('marketingBaseElementController',marketActivityController);

module.exports = contactantChanel;
