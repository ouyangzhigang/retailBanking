'use strict';

module.exports = function(ModalService) {
    var directive = {
        restrict: 'AE',
        link: linkFunc,
        transclude: true,
        replace: true,
        template: require('./modal.template.html')
    };

    return directive;

    function linkFunc(scope) {
        scope.close = close;

        function close() {
            var modalId = ModalService.getLastModalId();
            ModalService.dismissModal(modalId);
        }
    }
};
