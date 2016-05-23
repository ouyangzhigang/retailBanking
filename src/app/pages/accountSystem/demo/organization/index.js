'use strict';

var organizationController = require('./organization.controller');
var organizationHtml = require('./organization.html');
var business = require('achievement/processTarget/businessHandleDetail');

require('./organization.skin.styl');
require('./organization.layout.styl');

var mod = angular.module('withdraw.organization', [business.name])
    .controller('OrganizationController', organizationController);

module.exports = {
    module: mod,
    html: organizationHtml,
    controller: organizationController
};
