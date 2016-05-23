'use strict';
var myMarketingRouter = {
    url: '/marketing/createMarketActivity',
    template: require('./createMarketingActivity.html'),
    controller: 'CreateMarketActivityController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');

            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'createMarketActivity');

        return deferred.promise;
    }]
};

module.exports = myMarketingRouter;
