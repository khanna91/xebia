;(function () {
    'use strict';

    angular
    .module('product')
    .service('ProductService', ProductService);

    function ProductService(Utils, localStorageService) {
        this.cart = [];
        this.products = [];

        this.getCartItemCount = function() {
            return this.cart.length;
        }

        this.getCartTotalPrice = function() {
            var cartWorth = 0;
            angular.forEach(this.cart, function(cart, index) {
                cartWorth += cart.price;
            });
            cartWorth = cartWorth.toFixed(2);
            return cartWorth;
        }

        this.getCart = function() {
            return this.cart;
        }

        this.setProducts = function(products) {
            this.products = products;
            var cart = [];
            angular.forEach(this.products, function(product, index) {
                if(product.inCart) {
                    cart.push(product);
                }
            });
            this.cart = cart;
        }

        this.addItemToCart = function(item) {
            var pos = this.getProductPosition(item.productId);
            if(pos > -1) {
                this.cart.push(item);
                this.products[pos].inCart = true;
            }
            localStorageService.set('products', this.products);
            return this.getCartItemCount();
        }

        this.removeItemFromCart = function(item) {
            var pos = this.getProductPosition(item.productId);
            if(pos > -1) {
                this.cart.splice(pos, 1);
                this.products[pos].inCart = false;
            }
            localStorageService.set('products', this.products);
            return this.getCartItemCount();
        }

        this.listProducts = function() {
            return this.products;
        }

        this.getProductPosition = function(productId) {
            var pos = -1;
            for(var i = 0; i < this.products.length; i++) {
                if(this.products[i].productId == productId) {
                    pos = i;
                    break;
                }
            }
            return pos;
        }

        this.getProductDetail = function(productId) {
            var product = {};
            for(var i = 0; i < this.products.length; i++) {
                if(this.products[i].productId == productId) {
                    product = this.products[i];
                    break;
                }
            }
            return product;
        }

        return this;
    }
})();
