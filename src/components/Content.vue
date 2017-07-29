<template>
    <div id="content">
    <app-album></app-album>
    </div>
</template>



<script>

import SingleAlbum from './SingleAlbum.vue'

export default {

    components: {
        'app-album': SingleAlbum
    },

    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
#content {
    background: #fafafa;
    width: 83%;
}

</style>
