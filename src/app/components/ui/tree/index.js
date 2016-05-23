'use strict';

var treeDirective = require('./tree.directive');

require('./tree.layout.styl');
require('./tree.skin.styl');
var tree = angular.module('tree', [])
    .directive('cfoTree', treeDirective);

module.exports = tree;
