;(function() {
    'use strict';

    var zomatoApi = '${zomatoApiKey}';
    var localZomatoApiKey = '00c4ef8fd362359559f9322de537fb35';

    var mapApi = '${mapApiKey}';
    var localMapApiKey = 'AIzaSyBmjWgtryGkDDWoVgGIHJ5MM_QZDLCJ9kI';

    angular.module('app', [
        'ui.router', 'ngMessages', 'ngSanitize', 'ngAnimate', 'LocalStorageModule',
        // custom modules
        'utils', 'product'
    ]);
})();
