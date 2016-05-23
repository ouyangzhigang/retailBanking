'use strict';
var activeChanelHtml = require('./activeChanel.html');

module.exports = function() {
    var directive = {
        restrict: 'E',
        template:activeChanelHtml,
        scope: {
        },
        replace:true,
        bindToController: true,
        controller: activeChanelController,
        controllerAs:'vm'
    };

    function activeChanelController(){
        var vm = this;
        vm.gridOptions = {
            columnDefs:[
                {field:'dateLine',name:'营销渠道'},
                {field:'proccessRequire',name:'营销渠道发布信息'},
                {field:'successRate',name:'增加接触渠道'}
            ],
            data:[{
                dateLine:'2016-01-01',
                proccessRequire:'30%',
                successRate:'50%'
            },{
                dateLine:'2016-01-01',
                proccessRequire:'30%',
                successRate:'50%'
            },{
                dateLine:'2016-01-01',
                proccessRequire:'30%',
                successRate:'50%'
            }]
        };
    }

    return directive;
};
