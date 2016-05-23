'use strict';

var createMarketActivityController = require('./createMarketingActivity.controller');
var createMarketActivityHtml = require('./createMarketingActivity.html');

var marketingBaseElement = require('marketing/marketingBaseElement');
var marketingSucDef = require('marketing/marketingSucDef');
var marketingRequire = require('marketing/marketingRequire');
var contactantChanel = require('marketing/contactantChanel');
var activeChanel = require('marketing/activeChanel');
var marketingCustomerConfig = require('marketing/marketingCustomerConfig');

require('./createMarketingActivity.skin.styl');
require('./createMarketingActivity.layout.styl');

var mod = angular.module('createMarketingActivity', [marketingBaseElement.name,
    marketingSucDef.name,
    marketingCustomerConfig.name,
    marketingRequire.name,
    contactantChanel.name,
    activeChanel.name])
    .controller('CreateMarketActivityController', createMarketActivityController);

module.exports = {
    module: mod,
    html: createMarketActivityHtml,
    controller: createMarketActivityController
};
