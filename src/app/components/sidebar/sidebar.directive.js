(function () {
    'use strict';

    angular
        .module('pandiyan.me')
        .directive('sidebar', sidebar);

    function sidebar() {
        // Usage:
        // To display frequent items to visit
        // Creates:
        // It creates sidebar
        var directive = {
            bindToController: true,
            controller: SidebarController,
            controllerAs: 'vm',
            link: link, // TODO: revisit
            restrict: 'E',
            scope: {
            },
            templateUrl: 'app/components/sidebar/sidebar.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function SidebarController() {
        var vm = this;
    }
})();