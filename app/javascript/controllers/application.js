import { Application } from "@hotwired/stimulus"
import "@nathanvda/cocoon"
// app/javascript/packs/application.js

import 'jquery';

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
