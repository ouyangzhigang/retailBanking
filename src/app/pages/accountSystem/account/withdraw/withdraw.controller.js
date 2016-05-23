'use strict';

module.exports = function() {
    var vm = this;

    vm.concernContent = [{
        name: '首页',
        src: 'home-icon.png'
    }, {
        name: '我的客户',
        src: 'customer-icon.png'
    }, {
        name: '我的营销',
        src: 'promotion-icon.png'
    }, {
        name: '我的业绩',
        src: 'achievement-icon.png'
    }, {
        name: '我的工具',
        src: 'tool-icon.png'
    }];

    vm.menus = [{
        title: '组件',
        state: 'component'
    }, {
        title: '员工转推介',
        state: 'customer'
    }, {
        title: '机构转推介',
        state: 'organization'
    }, {
        title: '转推介查询',
        state: 'recommend'
    }, {
        title: '营销活动开展',
        state: 'marketActivity'
    }, {
        title: '目标客户搜索',
        state: 'targetCustomer'
    }];
};
