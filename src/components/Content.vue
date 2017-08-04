<template>
    <div id="content">
    
        <!-- <app-blog></app-blog> -->
        <component :is="activeComponent"></component>
    
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
    created() {

        bus.$on('changeComponent', (data) => {
            if(data == 'albums') {
                this.activeComponent = Albums;
            }else if(data == 'blog') {
                this.activeComponent = Blog;
            }
        })

    },
}
</script>

<style scoped lang="scss">
#content {
    background: #fafafa;
    width: 83%;
    box-sizing: border-box;
    position: relative;
}
</style>
