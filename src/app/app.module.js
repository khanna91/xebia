;(function() {
    'use strict';

    angular.module('app', [
        'ui.router', 'ngSanitize', 'LocalStorageModule',
        // custom modules
        'utils', 'product'
    ]);
})();
