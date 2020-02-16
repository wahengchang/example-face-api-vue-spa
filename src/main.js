import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueStash from 'vue-stash'
import store from './store'
import globalPlugin from './plugins/global';

Vue.config.productionTip = false
Vue.use(globalPlugin)
Vue.use(VueStash)
new Vue({
  router,
  data: { store },
  render: h => h(App)
}).$mount('#app')
