'use strict';

var createShortMessageRouter = {
    url: '/createShortMessage',
    template: require('./createShortMessage.html'),
    controller: 'CreateShortMessageController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');

            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'createShortMessage');

        return deferred.promise;
    }]
}

module.exports = createShortMessageRouter;
