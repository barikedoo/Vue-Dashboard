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
  display: flex;
  margin: 0 auto;
}

.post__button {
    background-color: #ea5a5a;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    width: 160px;
    height: 36px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
    border: none;
    border-radius: 16px;
    margin: 21px 32px 0;
    text-transform: uppercase;
    outline: none;
    display: inline-block;

    &:hover {
        cursor: pointer;
        background: lighten(#ea5a5a, 3%);
    }

    &:active {
        background: darken(#ea5a5a, 2%);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(234, 90, 90, 1);
        -moz-box-shadow: 0px 0px 10px 0px rgba(234, 90, 90, 1);
        box-shadow: 0px 0px 10px 0px rgba(234, 90, 90, 1);
    }
}
</style>
