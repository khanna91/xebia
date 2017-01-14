;(function() {
    angular.module('app').filter('ellipse', function (Utils) {
        return function (input, len) {
            if(Utils.isUndefinedOrNullOrEmpty(input)) {
                return input;
            } else {
                if(input.length <= len) {
                    return input;
                } else {
                    return input.substring(0, len - 3) + '...';
                }
            }
        };
    });
})();
