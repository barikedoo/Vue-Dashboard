import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource'
import VModal from 'vue-js-modal'
 
Vue.use(VModal)

Vue.use(VueResouce);

export const bus = new Vue({
  
});

new Vue({
  el: '#app',
  render: h => h(App)
})
