;(function() {
    'use strict';

    angular.module('app', [
        'ui.router', 'ngMessages', 'ngSanitize', 'ngAnimate', 'LocalStorageModule',
        // custom modules
        'utils', 'product'
    ]);
})();
