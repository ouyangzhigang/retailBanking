'use strict';

var withdrawModule = require('../account/withdraw');
var options = require('./chart.options');

module.exports = function($state, ModalService) {
    var vm = this;
    
    vm.page = {
        'currentPage': 1,
        'size': 4,
        'total': 20
    };

    vm.barOption = options.barOption;
    vm.funnelOption = options.funnelOption;
    vm._funnelOption = options._funnelOption;

    vm.inputOption = {
        type: 'email',
        class: 'form-control',
        placeholder: 'Email me!'
    };

    vm.formOption = {
        formName: 'vm.loginForm',
        rows: [{
            columns: [{
                type: 'input',
                width: [3, 6, 3],
                label: {
                    text: '姓名',
                    className: 'control-label col-lg-3 col-md-3 col-sm-3'
                },
                item: {
                    type: 'email',
                    itemClass: 'col-lg-6 col-md-6 col-sm-6',
                    inputClass: 'form-control',
                    placeholder: 'Email me!',
                    name: 'txt_name',
                    model: 'customName'
                },
                valid: {
                    className: 'error col-lg-3 col-md-3 col-sm-3',
                    errorName: 'vm.loginForm.txt_name.$error',
                    items: [{
                        key: 'required',
                        value: '不能为空'
                    }, {
                        key: 'minlength',
                        value: '8-12位'
                    }]
                }
            }]
        }]
    };


    vm.DoCtrlPagingAct = DoCtrlPagingAct;
    vm.goState = goState;
    vm.showModal = showModal;

    function DoCtrlPagingAct(text, page, pageSize, total) {
        console.log(text);
        console.log(page);
        console.log(pageSize);
        console.log(total);
    }

    function goState(state) {
        $state.go(state);
    }

    function showModal() {
        ModalService.showModal({
            modalId: 'withdraw',
            template: withdrawModule.html,
            controller: withdrawModule.controller,
            controllerAs: 'vm',
            size: 'lg',
            backdrop: 'static'
        });
    }
};
