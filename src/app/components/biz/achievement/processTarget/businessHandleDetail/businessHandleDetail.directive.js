'use strict';

var businessHandleDetailHtml = require('./businessHandleDetail.html');

module.exports = function businessDirective() {
    var directive = {
        restrict: 'E',
        template: businessHandleDetailHtml,
        replace: true,
        scope: {},
        controller: BusinessHandleDetailController,
        controllerAs: 'vm'
    };
    return directive;

    function BusinessHandleDetailController() {

        var vm = this;
        vm.page = {
            'currentPage': '1',
            'pageSize': '2',
            'total': '20'
        };
        var data2 = [{
            'type': '金融类',
            'content': 'xxx',
            'startTime': '2012-11-12',
            'endTime': '2014-01-11',
            'subTaskTotal': '300',
            'subTaskPercent': '80%',
            'undoneSubTask': '400',
            'agency': '南京分行',
            'operater': '明睿羊'
        }, {
            'type': '金融类',
            'content': 'xxx',
            'startTime': '2012-11-12',
            'endTime': '2014-01-11',
            'subTaskTotal': '300',
            'subTaskPercent': '80%',
            'undoneSubTask': '400',
            'agency': '南京分行',
            'operater': '明睿羊'
        }, {
            'type': '金融类',
            'content': 'xxx',
            'startTime': '2012-11-12',
            'endTime': '2014-01-11',
            'subTaskTotal': '300',
            'subTaskPercent': '80%',
            'undoneSubTask': '400',
            'agency': '南京分行',
            'operater': '明睿羊'
        }];

        vm.gridOptions = {
            enableRowSelection: false,
            enableRowHeaderSelection: false,
            enableColumnMenus: false,
            columnDefs: [{
                name: '代办事项类型',
                field: 'type'
            }, {
                name: '代办事项内容',
                field: 'content'
            }, {
                name: '代办事项开始时间',
                field: 'startTime'
            }, {
                name: '代办事项截止时间',
                field: 'endTime'
            }, {
                name: '子任务总数',
                field: 'subTaskTotal'
            }, {
                name: '子任务处理率',
                field: 'subTaskPercent'
            }, {
                name: '待处理子任务数',
                field: 'undoneSubTask'
            }, {
                name: '处理机构',
                field: 'agency'
            }, {
                name: '处理人员',
                field: 'operater'
            }],
            data: data2
        };
    }
};
