;(function () {
    'use strict';

    angular
        .module('utils')
        .factory('Utils', Utils);

    function Utils ($timeout, $window, $location) {
        var factory = {
            isUndefinedOrNullOrEmpty: function (obj) {
                return (typeof obj === 'undefined') || (obj === null) || (obj === '')/* || (this.isEmptyObject(obj))*/;
            },
            isUndefinedOrNullOrEmptyList: function (obj) {
                return (typeof obj === 'undefined') || (obj === null) || (typeof obj.length === 'undefined') || (obj.length == 0);
            }
        };
        return factory;
    }
})();
