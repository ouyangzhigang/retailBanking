'use strict';
var viewSurveyController = require('./viewSurvey.controller');
var viewSurveyHtml = require('./viewSurvey.html');
var panel=require('panel');
require('./viewSurvey.skin.styl');
require('./viewSurvey.layout.styl');
var mod = angular.module('customer.viewSurvey', [panel.name])
    .controller('ViewSurveyController', viewSurveyController);

module.exports = {
    module: mod,
    html: viewSurveyHtml,
    controller: viewSurveyController
};
