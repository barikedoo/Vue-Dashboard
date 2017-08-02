<template>
    <div id="content">
         <app-blog></app-blog>
    </div>
</template>


<script>

import { bus } from '../main'

import Albums from './Albums.vue'
import Upload from './Upload.vue'
import Blog from './Blog.vue'

export default {

    components: {
        'app-albums': Albums,
        'app-load': Upload,
        'app-blog': Blog

    },

    data() {
        return {
            activeComponent: Blog
        }
    },
    methods: {
        
    },
}
</script>

<style scoped lang="scss">
#content {
    background: #fafafa;
    width: 83%;
    box-sizing: border-box;
}
</style>
