'use strict';

var myMarketingController = require('./myMarketing.controller');
var myMarketingHtml = require('./myMarketing.html');

var myMarketingTable = require('marketing/myMarketingTable');


require('./myMarketing.skin.styl');
require('./myMarketing.layout.styl');

var mod = angular.module('myMarketing', [myMarketingTable.name
    ])
    .controller('MyMarketingController', myMarketingController);

module.exports = {
    module: mod,
    html: myMarketingHtml,
    controller: myMarketingController
};
