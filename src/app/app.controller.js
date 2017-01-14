;(function() {
    'use strict';

    angular.module('app')
    .controller('AppController', AppController);

    function AppController($scope, $state, $location) {
        var vm = this;
        var self = this;

        $scope.app = {
            version : '1.0.0'
        }

        // Checks if the given state is the current state
        $scope.is = function(name, params) {
            return $state.is(name, params);
        }

        // Checks if the given state/child states are present
        $scope.includes = function(name) {
            return $state.includes(name);
        }

        $scope.loading = {
            message : 'Please wait while loading...',
            show : false
        }

        $scope.setLoading = function(message) {
            $scope.loading = {
                message : message || 'Please wait while loading...',
                show : true
            }
        }

        $scope.clearLoading = function() {
            $scope.loading = {
                message : 'Please wait while loading...',
                show : false
            }
        }
    }

    angular.module('app')
    /*
        Use this directive together with ng-include to include a
        template file by replacing the placeholder element
    */

    .directive('includeReplace', function() {
        return {
            require: 'ngInclude',
            restrict: 'A',
            link: function(scope, el, attrs) {
                el.replaceWith(el.children());
            }
        };
    })
})();
