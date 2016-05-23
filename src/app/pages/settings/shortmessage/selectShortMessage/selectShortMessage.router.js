'use strict';

var selectShortMessageRouter = {
    url: '/selectShortMessage',
    template: require('./selectShortMessage.html'),
    controller: 'SelectShortMessageController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');

            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'selectShortMessage');

        return deferred.promise;
    }]
};

module.exports = selectShortMessageRouter;
