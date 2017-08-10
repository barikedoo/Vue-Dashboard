import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource'
import VModal from 'vue-js-modal'
import Ripple from 'vue-ripple-directive'

Vue.use(VModal)
Vue.use(VueResouce);

Vue.directive('ripple', Ripple);

export const bus = new Vue({

});

new Vue({
    el: '#app',
    render: h => h(App)
})
