import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'semantic-ui-css/semantic.css'

import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 4000
  }
})

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
