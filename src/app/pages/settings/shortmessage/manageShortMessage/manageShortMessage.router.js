'use strict';

var manageShortMessageRouter = {
    url: '/manageShortMessage',
    template: require('./manageShortMessage.html'),
    controller: 'ManageShortMessageController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');

            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'manageShortMessage');

        return deferred.promise;
    }]
};

module.exports = manageShortMessageRouter;

