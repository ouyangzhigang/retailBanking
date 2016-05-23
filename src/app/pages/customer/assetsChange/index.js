'use strict';
var assetsChangeController = require('./assetsChange.controller');
var assetsChangeHtml = require('./assetsChange.html');
var panel=require('panel');
var mod = angular.module('customer.assetsChange', [panel.name])
    .controller('AssetsChangeController', assetsChangeController);

module.exports = {
    module: mod,
    html: assetsChangeHtml,
    controller: assetsChangeController
};
