import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueI18n from 'vue-i18n'
import { Howl, Howler } from 'howler'
Vue.use(VueI18n)
sync(store, router)
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
