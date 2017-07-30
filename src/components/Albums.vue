<template>
    <div id="allAlbums">
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

}    
</script>

<style lang="scss" scoped>

</style>
