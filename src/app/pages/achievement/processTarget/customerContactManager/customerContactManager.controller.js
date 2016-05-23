'use strict';

module.exports = function CustomerContactController() {
    var vm = this;
    vm.gridOptions = {
        enableRowSelection: false,
        enableRowHeaderSelection: false,
        enableColumnMenus: false,
        columnDefs: [{
            name: '机构/用户',
            field: 'name'
        }, {
            name: '代办事项类型',
            field: 'type'
        }, {
            name: '全部任务',
            field: 'allTask'
        }, {
            name: '未处理数',
            field: 'undone'
        }, {
            name: '正在处理',
            field: 'doing'
        }, {
            name: '达标数',
            field: 'pass'
        }, {
            name: '未达标数',
            field: 'unpass'
        }, {
            name: '合计',
            field: 'total'
        }, {
            name: '过期关闭',
            field: 'close'
        }],
        data: [{
            'name': '南京分行',
            'type': '金融类',
            'allTask': '2000',
            'undone': '1000',
            'doing': '300',
            'pass': '300',
            'unpass': '400',
            'total': '700',
            'close': '200'
        }, {
            'name': '上海分行',
            'type': '金融类',
            'allTask': '2000',
            'undone': '1000',
            'doing': '400',
            'pass': '300',
            'unpass': '400',
            'total': '700',
            'close': '200'
        }, {
            'name': '杭州分行',
            'type': '金融类',
            'allTask': '2000',
            'undone': '1000',
            'doing': '500',
            'pass': '300',
            'unpass': '400',
            'total': '700',
            'close': '200'
        }]
    };
    // vm.data = [{
    //     'name': '南京分行',
    //     'type': '金融类',
    //     'allTask': '2000',
    //     'undone': '1000',
    //     'doing': '500',
    //     'pass': '300',
    //     'unpass': '400',
    //     'total': '700',
    //     'colse': '200'
    // }, {
    //     'name': '南京分行',
    //     'type': '金融类',
    //     'allTask': '2000',
    //     'undone': '1000',
    //     'doing': '500',
    //     'pass': '300',
    //     'unpassing': '400',
    //     'total': '700',
    //     'colse': '200'
    // }, {
    //     'name': '南京分行',
    //     'type': '金融类',
    //     'allTask': '2000',
    //     'undone': '1000',
    //     'doing': '500',
    //     'pass': '300',
    //     'unpassing': '400',
    //     'total': '700',
    //     'colse': '200'
    // }];
};
