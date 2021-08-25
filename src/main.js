import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import messages from './i18n/index'
import VueCarousel from 'vue-carousel'

import './assets/styles/main.scss'

Vue.use(VueI18n)
Vue.use(VueCarousel)
Vue.config.productionTip = false

new Vue({
  i18n: new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
  }),
  render: h => h(App)
}).$mount('#app')
