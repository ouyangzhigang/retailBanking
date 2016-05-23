'use strict';
var viewSurveyRouter = {
    url: '/customer/viewSurvey',
    template: require('./viewSurvey.html'),
    controller: 'ViewSurveyController',
    controllerAs: 'vm',
    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function(require) {
            var mod = require('./index');

            $ocLazyLoad.load({
                name: mod.module.name
            });

            deferred.resolve(mod.controller);
        }, 'customer.viewSurvey');

        return deferred.promise;
    }]
}
module.exports = viewSurveyRouter;
