'use strict';
var demoRouter = {
    url: '/demo',
    template: require('./demo.html'),
    // controller: 'DemoController',
    // controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');

            $ocLazyLoad.load({
                name: mod.module.name
            });

            //deferred.resolve(mod.controller);
        }, 'demo');

        return deferred.promise;
    }]
};

module.exports = demoRouter;
