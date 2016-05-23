'use strict';

module.exports = function config($logProvider, toastrConfig) {
    $logProvider.debugEnabled(true);                    // Enable log
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 2000;
    toastrConfig.positionClass = 'toast-top-center';
    toastrConfig.preventOpenDuplicates = true;
    toastrConfig.progressBar = false;
};
