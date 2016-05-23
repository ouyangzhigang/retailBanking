var marketingRequireHtml = require('./marketingRequire.html');

module.exports = function() {
    var directive = {
        restrict: 'E',
        template:marketingRequireHtml,
        scope: {
        },
        replace:true,
        bindToController: true,
        controller: marketingRequireController,
        controllerAs:'vm'
    };

    function marketingRequireController(){
        var vm = this;
        vm.gridOptions = {
            columnDefs:[
                {field:'dateLine',name:'截止时间'},
                {field:'proccessRequire',name:'处理进度要求'},
                {field:'successRate',name:'营销成功率'},
                {field:'addMarketRequire',name:'增加营销要求'}
            ],
            data:[{
                dateLine:'2016-01-01',
                proccessRequire:'30%',
                successRate:'50%',
                addMarketRequire:'-'
            },{
                dateLine:'2016-01-01',
                proccessRequire:'30%',
                successRate:'50%',
                addMarketRequire:'-'
            },{
                dateLine:'2016-01-01',
                proccessRequire:'30%',
                successRate:'50%',
                addMarketRequire:'-'
            }]
        };
    }

    return directive;
};
