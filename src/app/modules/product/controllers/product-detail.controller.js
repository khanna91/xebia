;(function() {
    'use strict';

    angular.module('product')
    .controller('ProductDetailController', ProductDetailController);

    function ProductDetailController($scope, $state, $stateParams, Utils, ProductService) {
        var vm = this;
        vm.product = {};
        vm.goToStore = goToStore;
        vm.addProductToCart = addProductToCart;
        vm.removeProductFromCart = removeProductFromCart;

        function goToStore() {
            $state.go('app.product');
        }

        function addProductToCart() {
            vm.cartCount = ProductService.addItemToCart(vm.product);
            vm.cartWorth = ProductService.getCartTotalPrice();
            vm.product.inCart = true;
        }

        function removeProductFromCart() {
            vm.cartCount = ProductService.removeItemFromCart(vm.product);
            vm.cartWorth = ProductService.getCartTotalPrice();
            vm.product.inCart = false;
        }

        function init() {
            if(Utils.isUndefinedOrNullOrEmpty($stateParams.productId)) {
                $state.go('404');
            }
            $scope.setLoading();
            vm.product = ProductService.getProductDetail($stateParams.productId);
            vm.cartCount = ProductService.getCartItemCount();
            vm.cartWorth = ProductService.getCartTotalPrice();
            $scope.clearLoading();
        }
        init();
    }

})();
