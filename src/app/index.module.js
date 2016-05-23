'use strict';

/* bower modules */
require('angular');
require('angular-animate');
require('angular-aria');
require('angular-cookies');
require('angular-bootstrap');
require('angular-flash/dist/angular-flash');
require('angular-loading-bar');
require('angular-messages');
require('angular-promise-tracker/promise-tracker');
require('angular-resource');
require('angular-sanitize');
require('angular-svg-round-progressbar/build/roundProgress');
require('angular-toastr');
require('angular-touch');
require('angular-ui-router/release/angular-ui-router');
require('oclazyload/dist/ocLazyLoad');
require('angular-ui-grid/ui-grid');
require('angular-material');
var Mock = require('mockjs/dist/mock');

/* styles */
require('./index.styl');

/* components */
var common = require('./components/common');
require('form/form-template/bootstrap-custom');

/* configs */

var config = require('./index.config.js');
var routerConfig = require('./index.router.js');
var runBlock = require('./index.run.js');
var constants = require('./index.constant.js');
var main = require('./pages/main');
var mainController = require('./pages/main/main.controller.js');
var panel = require('panel');
var app = angular.module('retailBanking', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'angular-flash.service',
    'angular-flash.flash-alert-directive',
    'angular-loading-bar',
    'ui.tree',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngMessages',
    'ajoslin.promise-tracker',
    'ngResource',
    'ngSanitize',
    'angular-svg-round-progressbar',
    'toastr',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'schemaForm',
    'ng-context-menu',
    'ngMaterial',
    common.name,
    main.module.name,
    panel.name
])
.config(['$logProvider', 'toastrConfig', config])
.config(['$stateProvider', '$urlRouterProvider', routerConfig])
.run(runBlock)
.constant('CONFIG', constants)
.controller('MainController',mainController);

console.log(Mock);

module.exports = app;
