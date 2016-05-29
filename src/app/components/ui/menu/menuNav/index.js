'use strict';

var menuNavDirective = require('./menuNav.directive');
var menuNavHtml = require('./menuNav.html');

require('./menuNav.layout.styl');

var menuNav = angular.module('menu.nav', [])
    .directive('menuNav', ['$window', menuNavDirective]);

var mod =  module.exports = angular.module('menuNav', []);


module.exports = menuNav;
