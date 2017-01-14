;(function() {
    'use strict';

    angular
        .module('product')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.product', {
                url: 'products',
                templateUrl: 'app/modules/product/views/product.tmpl.html',
                controller: 'ProductController',
                controllerAs: 'vm'
            })
            .state('app.productDetail', {
                url: 'product/:productId',
                templateUrl: 'app/modules/product/views/product-detail.tmpl.html',
                controller: 'ProductDetailController',
                controllerAs: 'vm'
            });
    }
})();
