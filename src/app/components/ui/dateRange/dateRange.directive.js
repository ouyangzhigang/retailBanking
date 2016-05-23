'use strict';
var cfoDataRange = require('./dateRange.html');

module.exports = function cfoButton() {
    var directive = {
        restrict: 'EA',
        template: cfoDataRange,
        replace: true,
        scope: {
            startDate:'=',
            endDate:'='
        },
        link: link
    };
    return directive;

    function link(){
    }
};
