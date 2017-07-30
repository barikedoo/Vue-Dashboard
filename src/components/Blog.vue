<template>
    <section id="blog">
        
        <app-new-post></app-new-post>

        <app-post></app-post>
        <app-post></app-post>
        <app-post></app-post>
        <app-post></app-post>
        <app-post></app-post>
    </section>
</template>

<script>

import SinglePost from './SinglePost.vue'
import NewPost from './NewPost.vue'

export default {

    components: {
        'app-post': SinglePost,
        'app-new-post': NewPost
    },

    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

#blog {
    width: 95%;
    display: flex;
    margin: 27px auto;
    min-height: 400px;
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>
