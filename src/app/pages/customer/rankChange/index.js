'use strict';
var rankChangeController = require('./rankChange.controller');
var rankChangeHtml = require('./rankChange.html');
var panel=require('panel');
var mod = angular.module('customer.rankChange', [panel.name])
    .controller('RankChangeController', rankChangeController);

module.exports = {
    module: mod,
    html: rankChangeHtml,
    controller: rankChangeController
};
