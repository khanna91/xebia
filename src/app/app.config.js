;(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider
            .otherwise('/products');
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'app/common/blocks/404.tmpl.html'
            })
            .state('500', {
                url: '/500',
                templateUrl: 'app/common/blocks/500.tmpl.html'
            })
            .state('app', {
                url: '/',
                templateUrl: 'app/app.tmpl.html',
                controller: 'AppController',
                controllerAs: 'App'
            });
    }
})();
