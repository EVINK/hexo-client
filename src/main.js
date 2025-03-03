import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import './plugins/element.js'
import './plugins/editor.js'
import './plugins/analytics.js'
import i18n from './plugins/i18n'

Vue.config.productionTip = false

window.appVersion = 'v1.2.9' // 当前版本号

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
