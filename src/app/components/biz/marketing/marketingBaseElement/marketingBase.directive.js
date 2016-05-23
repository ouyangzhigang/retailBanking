'use strict';
var marketingBaseElementHtml = require('./marketingBaseElement.html');

module.exports = function() {
    var directive = {
        restrict: 'E',
        template:marketingBaseElementHtml,
        scope: {
        },
        replace:true,
        bindToController: true,
        controller: marketingBaseElementController,
        controllerAs:'vm'
    };

    function marketingBaseElementController(){
        var vm = this;

        vm.model = {};

        vm.schema = {
            'type': 'object',
            'properties': {
                'activityName': {
                    'type': 'string',
                    'title': '营销活动名称：',
                    'format': 'hDefault'
                },
                'marketingKeyword': {
                    'type': 'string',
                    'title': '营销关键字:',
                    'format': 'hDefault'
                },

                'marketingStartTime': {
                    'type': 'string' ,
                    'title':'营销检测时间:',
                    'format': 'date'
                },
                'marketingEndTime': {
                    'type': 'string' ,
                    'title':'至',
                    'format': 'date'
                },
                'marketingWatchStartTime': {
                    'type': 'string' ,
                    'title':'营销时间:',
                    'format': 'date'
                },
                'marketingWatchEndTime': {
                    'type': 'string' ,
                    'title':'至',
                    'format': 'date'
                },
                'marketingContent':{
                    'type': 'string',
                    'title': '营销内容及方案：',
                    'format': 'hTextarea'
                },
                'marketingTarget':{
                    'type': 'string',
                    'title': '营销目标：',
                    'format': 'hTextarea'
                },
                'relatedPorduct':{
                    'type': 'string',
                    'title': '关联产品:',
                    'format': 'hDefault'
                }
            }
        };

        vm.form = [
            {
                key:'activityName',
                'divClass': 'col-lg-10 col-md-10 col-sm-10',
                'labelHtmlClass': 'col-lg-2 col-md-2 col-sm-2'
            },
            {
                key:'marketingKeyword',
                'divClass': 'col-lg-10 col-md-10 col-sm-10',
                'labelHtmlClass': 'col-lg-2 col-md-2 col-sm-2'
            },
            {
                type:'fieldset',
                htmlclass:'row',
                items:[{
                    'key': 'marketingStartTime',
                    'format': 'dd-MMMM-yyyy',
                    'opened': false,
                    'dateOptions': {
                        formatYear: 'yy',
                        maxDate: new Date(2020, 5, 22),
                        minDate: new Date(),
                        startingDay: 1
                    },
                    'altInputFormats': '["M!/d!/yyyy"]',
                    'htmlClass': 'col-lg-6 col-md-6 col-sm-6',
                    'divClass': 'col-lg-8 col-md-8 col-sm-8',
                    'labelHtmlClass': 'col-lg-4 col-md-4 col-sm-4'
                },{
                    key:'marketingEndTime',
                    'format': 'dd-MMMM-yyyy',
                    'opened': false,
                    'dateOptions': {
                        formatYear: 'yy',
                        maxDate: new Date(2020, 5, 22),
                        minDate: new Date(),
                        startingDay: 1
                    },
                    'altInputFormats': '["M!/d!/yyyy"]',
                    'htmlClass': 'col-lg-6 col-md-6 col-sm-6',
                    'divClass': 'col-lg-8 col-md-8 col-sm-8',
                    'labelHtmlClass': 'col-lg-2 col-md-2 col-sm-2'
                }]
            },
            {
                type:'fieldset',
                htmlclass:'row',
                items:[{
                    key:'marketingWatchStartTime',
                    'format': 'dd-MMMM-yyyy',
                    'opened': false,
                    'dateOptions': {
                        formatYear: 'yy',
                        maxDate: new Date(2020, 5, 22),
                        minDate: new Date(),
                        startingDay: 1
                    },
                    'altInputFormats': '["M!/d!/yyyy"]',
                    'htmlClass': 'col-lg-6 col-md-6 col-sm-6',
                    'divClass': 'col-lg-8 col-md-8 col-sm-8',
                    'labelHtmlClass': 'col-lg-4 col-md-4 col-sm-4'
                },{
                    key:'marketingWatchEndTime',
                    'format': 'dd-MMMM-yyyy',
                    'opened': false,
                    'dateOptions': {
                        formatYear: 'yy',
                        maxDate: new Date(2020, 5, 22),
                        minDate: new Date(),
                        startingDay: 1
                    },
                    'altInputFormats': '["M!/d!/yyyy"]',
                    'htmlClass': 'col-lg-6 col-md-6 col-sm-6',
                    'divClass': 'col-lg-8 col-md-8 col-sm-8',
                    'labelHtmlClass': 'col-lg-2 col-md-2 col-sm-2'
                }]
            },
            {
                type:'fieldset',
                items:[{
                    key:'marketingContent',
                    'htmlClass':'col-lg-11 col-md-11 col-sm-11',
                    'divClass': 'col-lg-10 col-md-10 col-sm-10',
                    'labelHtmlClass': 'col-lg-2 col-md-2 col-sm-2'
                },{
                    type:'button',
                    title:'上传',
                    'htmlClass':'col-lg-1 col-md-1 col-sm-1'
                }]

            },{
                type:'fieldset',
                items:[
                    {
                        key:'marketingTarget',
                        'htmlClass':'col-lg-11 col-md-11 col-sm-11',
                        'divClass': 'col-lg-10 col-md-10 col-sm-10',
                        'labelHtmlClass': 'col-lg-2 col-md-2 col-sm-2'
                    },{
                        type:'button',
                        title:'上传',
                        'htmlClass':'col-lg-1 col-md-1 col-sm-1'
                    }
                ]
            },

            {
                key:'relatedPorduct',
                'divClass': 'col-lg-10 col-md-10 col-sm-10',
                'labelHtmlClass': 'col-lg-2 col-md-2 col-sm-2'
            }

        ];
    }

    return directive;
};
