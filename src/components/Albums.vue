<template>
    <div id="allAlbums">

        <app-album></app-album>

        <ul class="list">
            <li class="list-item"></li>
        </ul>

    </div>
</template>

<script>

import SingleAlbum from './SingleAlbum.vue'

export default {
    components: {
        'app-album': SingleAlbum,
    },

    data() {
        return {
            show: true,
            numbers: [1,2,3,4]
        }
    },

}    
</script>

<style lang="scss" scoped>
.list {
    display: block;
    padding: 20px;
    
}

</style>
