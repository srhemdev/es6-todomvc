/* global app, $on */
(function(window) {
  'use strict'
    console.log(122)
  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
