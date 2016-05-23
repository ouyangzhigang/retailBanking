'use strict';

module.exports = function() {
    var vm = this;

    vm.schema = {
        type: "object",
        properties: {
            organization: {
                type: 'string'
            },
            staff: {
                type: 'string'
            },
            organizationLabel: {
                type: "string",
                title: '机构'
            },
            staffLabel: {
                type: "string",
                title: '行员'
            },
            organizationInput: {
                type: 'string',
                enum: ['a', 'd', 'f', 'd']
            },
            staffSelect: {
                type: 'string',
                enum: ['aa', 'aa', 'fff']
            }
        }
    };

    vm.model = {};

    vm.form = [{
        key: 'organization',
        // htmlClass: 'row',
        items: [
        {
            key: 'organizationLabel',
            htmlClass: 'col-lg-2 col-md-2'
        }, {
            key: 'organizationInput',
            htmlClass: 'col-lg-10 col-md-10'
        }]
    }, {
        key: 'staff',
        items: [{
            key: 'staffLabel',
            htmlClass: 'col-lg-1 col-md-1'
        }, {
            key: 'staffselect',
            htmlClass: 'col-lg-11 col-md-11'
        }]
    }, {
        key: 'staffSelect'
    }, {
        type: 'submit',
        title: '确定'
    }];
    // vm.form = [
    // {
    //     'key': 'organizationLabel'
    // }]
};
