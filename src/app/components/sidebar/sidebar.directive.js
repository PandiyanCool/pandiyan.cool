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
    function SidebarController($mdDialog) {
        var vm = this;
        vm.sidebarMenu = [
            { name: 'About', value: 'About' },
            { name: 'Blog', value: 'Blog' },
            { name: 'Resume', value: 'Resume' },
            { name: 'Projects', value: 'Projects' }
        ];

        vm.navigateTo = function (to, event) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Navigating')
                    .textContent('Imagine being taken to ' + to)
                    .ariaLabel('Navigation demo')
                    .ok('Neat!')
                    .targetEvent(event)
            );
        };

    }
})();