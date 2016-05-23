'use strict';

module.exports = function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('login', require('./pages/accountSystem/login/login.router'))
    .state('demo', require('./pages/demo/demo.router'))
    .state('form', require('./pages/accountSystem/form/form.router'))

    .state('businessDetail', require('./pages/achievement/processTarget/businessHandleDetail/businessHandleDetail.router'))

    //创建短信模板页面
    .state('createShortMessage', require('./pages/settings/shortmessage/createShortMessage/createShortMessage.router'))

    //我的营销
    .state('myMarketing', require('./pages/marketing/marketingExcuse/myMarketing/myMarketing.router'))

    //创建营销活动
    .state('createMarketActivity', require('./pages/marketing/marketingActivity/createMarketingActivity.router'))

    //管理短信模板页面
    .state('manageShortMessage', require('./pages/settings/shortmessage/manageShortMessage/manageShortMessage.router'))

    //选择短信模板
    .state('selectShortMessage', require('./pages/settings/shortmessage/selectShortMessage/selectShortMessage.router'))

    //客户视图概况
    .state('viewSurvey', require('./pages/customer/viewSurvey/viewSurvey.router'))

    //treedemo
    .state('tree', require('./pages/accountSystem/demo/treeTest/tree.router'))

    .state('deposit', {
        url: '/deposit',
        template: require('./pages/accountSystem/account/deposit/deposit.html'),
        controller: 'DepositController',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/account/deposit');
                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'deposit');

            return deferred.promise;
        }]
    })

    .state('withdraw', {
        url: '/withdraw',
        template: require('./pages/accountSystem/account/withdraw/withdraw.html'),
        controller: 'WithdrawController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/account/withdraw');
                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'withdraw');

            return deferred.promise;
        }]
    })

    .state('component', {
        url: '/withdraw/component',
        template: require('./pages/accountSystem/demo/component/component.html'),
        controller: 'ComponentController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/demo/component');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'component');

            return deferred.promise;
        }]
    })

    .state('customer', {
        url: '/withdraw/customer',
        template: require('./pages/accountSystem/demo/customer/customer.html'),
        controller: 'CustomerController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/demo/customer');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'customer');

            return deferred.promise;
        }]
    })

    .state('marketActivity', {
        url: '/withdraw/marketActivity',
        template: require('./pages/accountSystem/demo/marketActivity/marketActivity.html'),
        controller: 'MarketActivityController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/demo/marketActivity');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'marketActivity');

            return deferred.promise;
        }]
    })

    .state('organization', {
        url: '/withdraw/organization',
        template: require('./pages/accountSystem/demo/organization/organization.html'),
        controller: 'OrganizationController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/demo/organization');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'organization');

            return deferred.promise;
        }]
    })

    .state('recommend', {
        url: '/withdraw/recommend',
        template: require('./pages/accountSystem/demo/recommend/recommend.html'),
        controller: 'RecommendController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/demo/recommend');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'recommend');
            return deferred.promise;
        }]
    })

    .state('customerContact', {
        url: '/customerContact',
        template: require('./pages/achievement/processTarget/customerContactManager/customerContactManager.html'),
        controller: 'CustomerContactController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/achievement/processTarget/customerContactManager');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'customerContact');

            return deferred.promise;
        }]
    })

    .state('rankChange', {
        url: '/customer/rankChange',
        template: require('./pages/customer/rankChange/rankChange.html'),
        controller: 'RankChangeController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/customer/rankChange');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'rankChange');

            return deferred.promise;
        }]
    })

    .state('tabel', {
        url: '/withdraw/table',
        template: require('./pages/accountSystem/demo/table/table.html'),
        controller: 'TableController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/demo/table');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'table');

            return deferred.promise;
        }]
    })

    .state('targetCustomer', {
        url: '/withdraw/targetCustomer',
        template: require('./pages/accountSystem/demo/targetCustomer/targetCustomer.html'),
        controller: 'TargetCustomerController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/accountSystem/demo/targetCustomer');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'targetCustomer');

            return deferred.promise;
        }]
    })

    .state('loan', {
        url: '/loan',
        template: require('./pages/product/loan/loan.html'),
        controller: 'LoanController',
        controllerAs: 'vm',
        resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function(require) {
                var mod = require('./pages/product/loan');

                $ocLazyLoad.load({
                    name: mod.module.name
                });

                deferred.resolve(mod.controller);
            }, 'loan');

            return deferred.promise;
        }]
    });

    $urlRouterProvider.otherwise('/customerContact');
};
