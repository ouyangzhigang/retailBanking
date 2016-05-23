'use strict';
var TreeTestRouter = {
    url: '/demo/tree',
    template: require('./tree.html'),
    controller: 'TreeTestController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();
        require.ensure([], function(require) {
            var mod = require('./index');
            $ocLazyLoad.load({
                name: mod.module.name
            });
            deferred.resolve(mod.controller);
        }, 'demo.tree');

        return deferred.promise;
    }]
}
module.exports = TreeTestRouter;
