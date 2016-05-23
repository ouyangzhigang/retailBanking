'use strict';

var businessDetailHtml = require('./businessHandleDetail.html');
var BusinessDetailCon = require('./businessHandleDetail.controller');
//引用业务组件
var business = require('achievement/processTarget/businessHandleDetail');

var mod = angular.module('businessDetail',[business.name])
    .controller('BusinessDetailController', BusinessDetailCon);

module.exports = {
    module: mod,
    html: businessDetailHtml,
    controller: BusinessDetailCon
};
