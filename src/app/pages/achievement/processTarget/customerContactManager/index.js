'use strict';
var customerContactHtml = require('./customerContactManager.html');
var customerContactCon = require('./customerContactManager.controller');

var customer = require('achievement/processTarget/customerContactManager');

require('./customerContactManager.layout.styl');
require('./customerContactManager.skin.styl');

var mod = angular.module('achievement.customer',[customer.name])
        .controller('CustomerContactController',customerContactCon);

module.exports = {
    module: mod,
    html: customerContactHtml,
    controller: customerContactCon
}
