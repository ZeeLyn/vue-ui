import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueUI from '../packages/index';


Vue.config.productionTip = false
Vue.use(vueUI)


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
