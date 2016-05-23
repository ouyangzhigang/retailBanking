'use strict';

module.exports = function() {
    var vm = this;

    vm.submit = submit;

    function submit() {
        console.log(vm.model);
    }

    vm.model = {};

    vm.schema = {
        'type': 'object',
        'title': 'Comment',
        'properties': {
            'text': {
                'title': 'text',
                'type': 'string',
                'format': 'hDefault'
            },
            'datePicker': {
                'title': 'datePicker',
                'type': 'string',
                'format': 'date'
            },
            'password': {
                'title': 'password',
                'type': 'string',
                'format': 'hPassword'
            },
            'number': {
                'title': 'number',
                'type': 'string',
                'format': 'hNumber'
            },
            'select': {
                'title': 'select',
                'type': 'string',
                'format': 'hSelect',
                'enum': ['hello', 'world', 'nihao']
            },
            'textarea': {
                'title': 'textarea',
                'type': 'string',
                'format': 'hTextarea'
            }
        }
    };

    vm.form = [{
        'type': 'fieldset',
        'htmlClass': 'row',
        'items': [{
            'key': 'text',
            'htmlClass': 'col-lg-6 col-md-6 col-sm-6',
            'divClass': 'col-lg-6 col-md-6 col-sm-6',
            'labelHtmlClass': 'col-lg-6 col-md-6 col-sm-6',
            'fieldAddonLeft': '@'
        }, {
            'key': 'datePicker',
            'format': 'dd-MMMM-yyyy',
            'opened': false,
            'dateOptions': {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            },
            onClick: function($event, form) {
                form.opened = true;
            },
            'altInputFormats': '["M!/d!/yyyy"]',
            'htmlClass': 'col-lg-6 col-md-6 col-sm-6',
            'divClass': 'col-lg-6 col-md-6 col-sm-6',
            'labelHtmlClass': 'col-lg-6 col-md-6 col-sm-6'
        }]
    }, {
        'key': 'password',
        'divClass': 'col-lg-6 col-md-6 col-sm-6',
        'labelHtmlClass': 'col-lg-6 col-md-6 col-sm-6'
    }, {
        'key': 'number',
        'divClass': 'col-lg-6 col-md-6 col-sm-6',
        'labelHtmlClass': 'col-lg-6 col-md-6 col-sm-6'
    }, {
        'key': 'select',
        'divClass': 'col-lg-6 col-md-6 col-sm-6',
        'labelHtmlClass': 'col-lg-6 col-md-6 col-sm-6'
    }, {
        'key': 'textarea',
        'divClass': 'col-lg-6 col-md-6 col-sm-6',
        'labelHtmlClass': 'col-lg-6 col-md-6 col-sm-6'
    }];
};
