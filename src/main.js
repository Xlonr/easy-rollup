/**
 * Created by XLON on 2018/1/24.
 */
import Vue from 'vue'
import app from './vue/app.vue'

Vue.config.debug = true

let _vm = new Vue({
  el: '#app',
  render: h => h(app)
})
