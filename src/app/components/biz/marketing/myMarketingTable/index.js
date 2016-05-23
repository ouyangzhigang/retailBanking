'use strict';
var angular = require('angular');

var myMarketingTableDirective = require('./myMarketingTable.directive');

var marketingTable = angular.module('myMarketingTable',[])
    .directive('marketingTabel',myMarketingTableDirective);

module.exports = marketingTable;
