'use strict';

module.exports = function(){
    var vm = this;

    vm.model = {};

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
            shortMessageType: {
                type: 'string',
                title: '短信类型',
                enum: ['营销类短信', '非营销类短信']
            },
            areaRange: {
                type: 'string',
                title: '使用范围'
            },
            areaRange: {
                type: 'string',
                title: '有效期'
            }
        }
    };

    vm.form = [
        'chooseTemplate',
        'templateName',
        'shortMessageType'
    ];
}
