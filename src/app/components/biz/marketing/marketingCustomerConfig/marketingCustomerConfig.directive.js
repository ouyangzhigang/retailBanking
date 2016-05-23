'use strict';
var marketingCustomerHtml = require('./marketingCustomerConfig.html');

module.exports = function() {
    var directive = {
        restrict: 'E',
        template:marketingCustomerHtml,
        scope: {
        },
        replace:true,
        bindToController: true,
        controller: marketingCustomerConfigController,
        controllerAs:'vm'
    };

    function marketingCustomerConfigController(){
        var vm = this;
        vm.model = {};

        vm.schema = {
            'type': 'object',
            'properties': {
                'marketingCustomer': {
                    'type': 'string',
                    'title': '营销对象：',
                    'format': 'hDefault'
                }
            }
        };

        vm.form = [
            {
                key:'marketingCustomer',
                'divClass': 'col-lg-10 col-md-10 col-sm-10',
                'labelHtmlClass': 'col-lg-2 col-md-2 col-sm-2'
            }

        ];

    }

    return directive;
};
