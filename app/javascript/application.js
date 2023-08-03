// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "@hotwired/turbo-rails"
import "controllers"
import $ from 'jquery'
import "notifyjs-browser"

// Faça o jQuery ficar disponível globalmente
global.$ = global.jQuery = $;
