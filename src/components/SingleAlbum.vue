<template>
    <div id="album" class="album">
    
        <div class="album__name">
            <p class="album__name__name">Turkey</p>
            <p class="album__name__photos-total">(9 photos)</p>
        </div>
    
        <div class="album__photos">
            <app-photo></app-photo>
            <app-photo></app-photo>
            <app-photo></app-photo>
            <app-photo></app-photo>
        </div>
    
    </div>
</template>



<script>

import SinglePhoto from './SinglePhoto.vue'

export default {

    components: {
        'app-photo': SinglePhoto
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
#album {
    background: #fafafa;
    width: 95%;
    display: flex;
    margin: 30px;
    flex-direction: column;
}

.album {

    &__name {
        display: block;

        &__name {
            color: #444444;
            font-size: 22px;
            font-weight: 400;
            display: inline-block;
            padding: 0 5px 10px 0;
        }
        &__photos-total {
            display: inline-block;
            color: #c0c0c0;
            font-size: 14px;
            font-weight: 400;
        }
    }

    &__photos {
        display: flex;
        justify-content: space-between;
    }
}
</style>
