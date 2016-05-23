'use strict';

var businessDetailRouter = {
    url: '/businessDetail',
    template: require('./businessHandleDetail.html'),
    controller: 'BusinessDetailController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');
            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'businessDetail');

        return deferred.promise;
    }]

};
module.exports = businessDetailRouter;
