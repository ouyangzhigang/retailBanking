'use strict';

var formHtml = require('./form.html');
var formController = require('./form.controller');

var mod = angular.module('form', [])
    .controller('FormController', formController);

module.exports = {
    module: mod,
    controller: formController,
    html: formHtml
};
