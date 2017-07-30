import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource'

Vue.use(VueResouce);

export const bus = new Vue({
  
});

new Vue({
  el: '#app',
  render: h => h(App)
})
