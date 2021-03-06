'use strict';
var loginRouter = {
    url: '/login',
    template: require('./login.html'),
    controller: 'LoginController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');
            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'login');

        return deferred.promise;
    }]
};
module.exports = loginRouter;
