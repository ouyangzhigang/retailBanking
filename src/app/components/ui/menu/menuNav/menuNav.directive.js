'use strict';

var menuBarHtml = require('./menuNav.html');

module.exports = function menuBar($window) {
    var directive = {
        restrict: 'E',
        scope:{
            menu: '='
        },
        replace: true,
        template: menuBarHtml,
        link:linkFunc
    };

    return directive;

    function linkFunc(scope) {
        scope.displayMenu = [];
        scope.circleRun = [];
        scope.nextDisplayMenu = [];
        scope.displayIndex = -1;
        scope.parentIndex = -1;
        scope.finalIndex = -1;
        scope.rightNow = false;
        scope.lastNow = false;

        scope.disContentMenu = function(){
            scope.displayMenu = [];
            scope.rightNow = false;
            scope.lastNow = false;
        };

        scope.circleNice = function(index, length){
            scope.circleRun = [];
            scope.circleRun[index] = true;
        };

        scope.selectMenu = function(index, length) {
            scope.parentIndex = index;
            for(var i = 0; i < length; i++) {
                if (i != index) {
                    scope.displayMenu[i] = false;
                }else {
                    scope.displayMenu[index] = true;
                }
            }
        };

        scope.selectNextMenu = function($event ,nextIndex, nextLength) {
            scope.displayIndex = nextIndex;
            if ($event.isTrusted) {
                scope.rightNow = true;
            }else {
                scope.rightNow = false;
            }
        };

        scope.selectLastMenu = function($event, lastIndex) {
            scope.finalIndex = lastIndex;
            if ($event.isTrusted) {
                scope.lastNow = true;
            }else {
                scope.lastNow = false;
            }
        };

        scope.resetDisplay = function() {
            scope.rightNow = false;
            scope.lastNow = false;
        };

    }
};
