'use strict';

var componentController = require('./component.controller');
var componentHtml = require('./component.html');

require('./component.skin.styl');
require('./component.layout.styl');

var mod = angular.module('withdraw.component', [])
    .controller('ComponentController', componentController);

module.exports = {
    module: mod,
    html: componentHtml,
    controller: componentController
};
