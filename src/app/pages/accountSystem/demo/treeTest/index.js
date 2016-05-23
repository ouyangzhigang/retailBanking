'use strict';

var treeTestController = require('./treeTest.controller');
var treeHtml = require('./tree.html');
var tree=require('tree');

var mod = angular.module('withdraw.tree', [tree.name])
    .controller('TreeTestController', treeTestController);

module.exports = {
    module: mod,
    html: treeHtml,
    controller: treeTestController
};
