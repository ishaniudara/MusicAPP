import Vue from 'vue'
import App from './App.vue'
import navbar from './components/navbar.vue'

Vue.component('app-nav',navbar);

new Vue({
  el: '#app',
  render: h => h(App)
})
