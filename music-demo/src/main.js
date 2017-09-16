import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

new Vue({
  el: '#app',
  data: {
    pathName: ''
  },
  mounted: function(){
    this.pathName = document.querySelector('.router-link-exact-active').innerHTML;
  },
  render: h => h(App),
  router
})
