'use strict';

module.exports = function() {
    var vm = this;

    vm.page = {
        'currentPage': '1',
        'page-size': '4',
        'total': '20'
    };

    vm.gridOptions = {
        enableRowSelection: false,
        enableRowHeaderSelection: false,
        enableColumnMenus:false,
        columnDefs: [
            {name: '选择', field: 'id', cellTemplate: '<input type = "radio">'},
            {name: '模板类型', field: 'type'},
            {name: '模板名称', field: 'name'},
            {name: '短信模板内容',field: 'content'},
            {name: '创建人员', field: 'person'},
            {name: '创建机构', field: 'organization'},
            {name: '创建时间', field: 'time'},
            {name: '短信模板状态', field: 'state'},
            {name: '操作', field: 'operate'}
        ],
        data: [{
            'id': '',
            'type': '产品营销类',
            'name': '鑫联税减免',
            'content': '2016年5月19日起，储蓄额满500万鑫联税实施减免5%',
            'person': '吴斌',
            'organization': '城南片-夫子庙支行',
            'time': '2016-05-19',
            'state': '失效'
        }, {
            'id': '',
            'type': '生日提醒类',
            'name': '客户生日提醒',
            'content': '尊敬的客户，感谢您对南京银行一贯的支持，祝您生日快乐...',
            'person': '吴斌',
            'organization': '城南片-夫子庙支行',
            'time': '2016-05-19',
            'state': '启用'
        }, {
            'id': '',
            'type': '产品到期类',
            'name': '客户生日提醒',
            'content': '尊敬的客户，您购买的产品已经到期...',
            'person': '吴斌',
            'organization': '城南片-夫子庙支行',
            'time': '2016-05-19',
            'state': '启用'
        }, {
            'id': '',
            'type': '产品到期类',
            'name': '客户生日提醒',
            'content': '尊敬的客户，您购买的产品已经到期...',
            'person': '吴斌',
            'organization': '城南片-夫子庙支行',
            'time': '2016-05-19',
            'state': '启用'
        }, {
            'id': '',
            'type': '产品到期类',
            'name': '客户生日提醒',
            'content': '尊敬的客户，您购买的产品已经到期...',
            'person': '吴斌',
            'organization': '城南片-夫子庙支行',
            'time': '2016-05-19',
            'state': '启用'
        }, {
            'id':'',
            'type': '产品到期类',
            'name': '客户生日提醒',
            'content': '尊敬的客户，您购买的产品已经到期...',
            'person': '吴斌',
            'organization': '城南片-夫子庙支行',
            'time': '2016-05-19',
            'state': '启用'
        }]
    }
}
