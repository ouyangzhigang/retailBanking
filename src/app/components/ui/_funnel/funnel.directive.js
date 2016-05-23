'use strict';

var _ = require('lodash');

var funnelHtml = require('./funnel.html');

module.exports = function() {
    var directive = {
        restrict: 'AE',
        link: linkFunc,
        template: funnelHtml
    };

    return directive;

    function linkFunc(scope, el, attr) {
        //监听options变化
        attr.$observe('options', function() {
            if (attr.options) {
                var options = scope.$eval(attr.options);
                if (angular.isObject(options)) {
                    scope.options = Mapping(options);
                }
            }
        }, true);
    }

    function Mapping(options) {
        var data = options.data;

        var total = [];
        angular.forEach(data, function(key) {
            // 计算当前bar的总数
            var tmp = _.sumBy(key.value, function(o) {
                return parseInt(o.value);
            });
            total.push(tmp);
        });

        total = _.max(total);

        angular.forEach(data, function(key) {
            angular.forEach(key.value, function(key) {
                key.percent = (parseInt(key.value) * 100 / total).toFixed(2) + '%';
            });
        });

        return options;
    }
};

