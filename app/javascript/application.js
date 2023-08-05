// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "@hotwired/turbo-rails"
import "controllers"
import $ from 'jquery'
import 'jquery' // Importe o jQuery
import 'cocoon-js' // Importe o script da gem cocoon


import "notifyjs-browser"


document.addEventListener("DOMContentLoaded", () => {
  cocoon();
});

// Faça o jQuery ficar disponível globalmente
global.$ = global.jQuery = $;
