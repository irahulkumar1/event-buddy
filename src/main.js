import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'

import './init'
Vue.config.productionTip = false

Vue.use(vuelidate)

new Vue({
  vuelidate,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
