'use strict';
var formRouter = {
    url: '/form',
    template: require('./form.html'),
    controller: 'FormController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');
            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'form');

        return deferred.promise;
    }]
};
module.exports = formRouter;
