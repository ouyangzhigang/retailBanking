'use strict';

// var ErrorService = require('./error.service');
// var HttpIntercepterService = require('./http-intercepter.service');
// var LoggerService = require('./logger.service');
// var RouterHelperProvider = require('./router-helper.provider');
var ModalService = require('./modal.service');

var service = angular.module('app.service', []);

service
    // .service('ErrorService', ErrorService)
    // .service('HttpIntercepterService', HttpIntercepterService)
    // .service('LoggerService', LoggerService)
    // .service('RouterHelperProvider', RouterHelperProvider)
    .service('ModalService', ['$uibModal', ModalService]);

module.exports = service;
