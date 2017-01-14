;(function() {
    'use strict';

    angular.module('app').run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $http, $state, Utils, localStorageService, ProductService) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));

        $rootScope.$on("$stateChangeError", function(error) {
            $state.go('500');
        });

        var products = localStorageService.get('products');
        if(Utils.isUndefinedOrNullOrEmptyList(products)) {
            $http({
                url: '/assets/img/products.json',
                method: 'GET'
            }).then(function(response) {
                localStorageService.set('products', response.data);
                ProductService.setProducts(response.data);
            }).catch(function(error) {
                console.log(error);
            });
        } else {
            ProductService.setProducts(products);
        }
    }
})();
