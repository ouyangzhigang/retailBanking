'use strict';

module.exports = function MarketActivityController() {
    var vm = this;
    vm.data = [6, 12, 16, 201, 135, 369, 21, 37, 8];
    vm.yAxis = [{
        title: '0%'
    }, {
        title: '72%'
    }];

    vm.xAxis = [{
        title: '287万'
    }, {
        title: '796万'
    }];


    vm.tab_items = [{
        key: 'yidong',
        value: '待跟进客户'
    }, {
        key: 'daigenjin',
        value: '待跟进客户'
    }, {
        key: 'qianzai',
        value: '潜在客户'
    }, {
        key: 'kehugaikuang',
        value: '客户概况'
    }, {
        key: 'kehuchaxun',
        value: '客户查询'
    }, {
        key: 'gaojisousuo',
        value: '高级搜索'
    }];
};
