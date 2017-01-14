;(function() {
    'use strict';

    angular.module('product')
    .controller('ProductController', ProductController);

    function ProductController($scope, $state, ProductService) {
        var vm = this;
        vm.products = [];
        vm.searchText = '';
        vm.cartCount = 0;
        vm.cartWorth = 0;
        vm.addProductToCart = addProductToCart;
        vm.viewProductDetail = viewProductDetail;

        function viewProductDetail(product) {
            $state.go('app.productDetail', {'productId' : product.productId});
        }

        function addProductToCart(product, index) {
            if(product.inCart) {
                return ;
            }
            vm.cartCount = ProductService.addItemToCart(product, index);
            vm.cartWorth = ProductService.getCartTotalPrice();
            vm.products[index].inCart = true;
        }

        function init() {
            vm.products = ProductService.listProducts();
            vm.cartCount = ProductService.getCartItemCount();
            vm.cartWorth = ProductService.getCartTotalPrice();
        }
        init();
    }
})();
