(function() {
  'use strict';

  angular
    .module('pandiyanMe')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
