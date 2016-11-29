(function() {
  'use strict';

  angular
    .module('pandiyan.me')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $mdDialog) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1479296275456;
    vm.showToastr = showToastr;
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

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
