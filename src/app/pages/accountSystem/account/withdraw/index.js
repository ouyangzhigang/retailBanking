'use strict';

var withdrawController = require('./withdraw.controller');
var withdrawHtml = require('./withdraw.html');

var header = require('header');
var sideBar = require('menu/sideBar');
var sideItem = require('menu/sideItem');
var icon = require('icon');
var menuBar = require('menu/menuBar');

require('./withdraw.styl');

var mod = angular.module('withdraw', [
    header.name,
    sideBar.name,
    sideItem.name,
    icon.name,
    menuBar.name
]);

mod.controller('WithdrawController', ['$state', 'ModalService', withdrawController]);

module.exports = {
    module: mod,
    controller: withdrawController,
    html: withdrawHtml
};
