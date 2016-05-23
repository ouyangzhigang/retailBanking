'use strict';

var recommendController = require('./recommend.controller');
var recommendHtml = require('./recommend.html');

require('./recommend.skin.styl');
require('./recommend.layout.styl');

var mod = angular.module('withdraw.recommend', [])
    .controller('RecommendController', recommendController);

module.exports = {
    module: mod,
    html: recommendHtml,
    controller: recommendController
};
