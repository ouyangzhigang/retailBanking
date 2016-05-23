'use strict';

module.exports = function(){
    var vm = this;

    vm.modal = {};

    vm.schema = {
        type: 'object',
        properties: {
            chooseTemplate: {
                title: '模板类型',
                type: 'string',
                enum: ['产品营销类', '节日祝福类', '生日提醒类', '产品到期提醒类', '定投扣款暂停提醒类']
            },
            templateName: {
                type: 'string',
                title: '模板名称'
            },
            messageType: {
                type: 'string',
                title: '短信类型',
                enum: ['全部', '营销类短信', '非营销类短信']
            },
            templateState: {
                type: 'string',
                title: '短信模板状态',
                enum: ['全部', '草稿', '已提交']
            }
        }
    };

    vm.form = [
        {
            'type': 'fieldset',
            'items':[
                {
                    'key': 'chooseTemplate',
                    'htmlClass': 'col-md-6'
                }, {
                    'key': 'templateName',
                    'htmlClass': 'col-md-6'
                }
            ]
        }, {
            'type': 'fieldset',
            'items':[
                {
                    'key': 'messageType',
                    'htmlClass': 'col-md-6'
                }, {
                    'key': 'templateState',
                    'htmlClass': 'col-md-6'
                }
            ]
        }, {
            'type': 'actions',
            'items': [
                { type: 'submit', style: 'btn-success', title: 'Ok' },
                { type: 'button', style: 'btn-info', title: 'Cancel' }
            ]
        }
    ]
}
