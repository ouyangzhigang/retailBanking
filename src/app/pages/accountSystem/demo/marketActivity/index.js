'use strict';

var marketActivityController = require('./marketActivity.controller');
var marketActivityHtml = require('./marketActivity.html');

require('./marketActivity.skin.styl');
require('./marketActivity.layout.styl');

var mod = angular.module('withdraw.marketActivity', [])
    .controller('MarketActivityController', marketActivityController);

module.exports = {
    module: mod,
    html: marketActivityHtml,
    controller: marketActivityController
};
