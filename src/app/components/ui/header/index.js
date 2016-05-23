'use strict';

var headerDirective = require('./header.directive');

var logo = require('logo');

require('./header.skin.styl');
require('./header.layout.styl');

var header = angular.module('header', [logo.name])
    .directive('cfoHeader', headerDirective);

module.exports = header;
