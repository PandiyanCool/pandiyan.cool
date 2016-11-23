(function() {
  'use strict';

  angular
    .module('pandiyan.me')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
