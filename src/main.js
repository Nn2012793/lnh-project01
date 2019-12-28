import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from '@/api'
import Mybread from '@/plugin'

Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(Mybread)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
