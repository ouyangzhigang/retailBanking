'use strict';

var tableController = require('./table.controller');
var tableHtml = require('./table.html');

var mod = angular.module('withdraw.table',[])
    .controller('TableController', ['uiGridConstants', tableController]);

module.exports = {
    module: mod,
    html: tableHtml,
    controller: tableController
};
