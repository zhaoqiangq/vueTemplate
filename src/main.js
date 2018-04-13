// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/base'
import Utils from '@/lib/utils'
import 'jquery'
import "babel-polyfill"
import VueScroller from 'vue-scroller'
import VueClipboard from 'vue-clipboard2'


Vue.use(Utils)
Vue.use(VueScroller);
Vue.use(VueClipboard);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
