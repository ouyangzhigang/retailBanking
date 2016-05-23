'use strict';

var matrixHtml = require('./matrix.html');

module.exports = function matrix() {
    var directive = {
        restrict: 'E',
        template: matrixHtml,
        scope: {
            data:'=',
            xaxis:'=',
            yaxis:'='
        },
        link: linkFunc
    };

    return directive;

    function linkFunc(scope) {
        var arr = scope.data;
        if(arr && arr.length){
            var sort_arr = sortArr(arr);
        }
        scope.data = sort_arr;

        //排序
        function sortArr(arr){
            var newArr = [];

            newArr[0] = {'index':4,'title':arr[3]};
            newArr[1] = {'index':7,'title':arr[6]};
            newArr[2] = {'index':9,'title':arr[8]};
            newArr[3] = {'index':2,'title':arr[1]};
            newArr[4] = {'index':5,'title':arr[4]};
            newArr[5] = {'index':8,'title':arr[7]};
            newArr[6] = {'index':1,'title':arr[0]};
            newArr[7] = {'index':3,'title':arr[2]};
            newArr[8] = {'index':6,'title':arr[5]};

            return newArr;
        }
    }
};
