import Vue from 'vue'
import App from './App.vue'

import 'typeface-montserrat'
import 'typeface-source-sans-pro'
import 'normalize.css'

import router from './router'

window.app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
