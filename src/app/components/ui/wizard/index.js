'use strict';

var wizardDirective = require('./wizard.directive');

var wizard = angular.module('wizard', [])
    .directive('cfoWizard', wizardDirective);

module.exports = wizard;
