'use strict';
var myMarketingRouter = {
    url: '/marketing/marketingExcuse/myMarketing',
    template: require('./myMarketing.html'),
    controller: 'MyMarketingController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');

            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'myMarketing');

        return deferred.promise;
    }]
};

module.exports = myMarketingRouter;
