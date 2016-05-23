'use strict';
var header = require('header');
var sideBar = require('menu/sideBar');
var sideItem = require('menu/sideItem');
var icon = require('icon');
var menuNav = require('menu/menuNav');

var mod = angular.module('main', [
    header.name,
    sideBar.name,
    sideItem.name,
    icon.name,
    menuNav.name
]);


module.exports = {
    module: mod
};
