<template>
  <div id="app">
  
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  
  </div>
</template>

<script>

import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'
import Upload from './components/Upload.vue'


export default {

  components: {
    'app-sidebar': Sidebar,
    'app-content': Content,
  },

  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
}
</style>
