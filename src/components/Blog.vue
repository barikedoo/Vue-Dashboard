<template>
    <section id="blog">
        <div class="button_wrapper">
            <button class="post__button" @click="showAddPost = !showAddPost">Add new post</button>
        </div>
        <app-new-post v-if="showAddPost"></app-new-post>
    
        <app-post v-bind:propPost='post' :key="post.id" v-for="post in allPosts"></app-post>
    
    </section>
</template>

<script>

import SinglePost from './SinglePost.vue'
import NewPost from './NewPost.vue'
import { bus } from '../main'

export default {

    components: {
        'app-post': SinglePost,
        'app-new-post': NewPost
    },

    data() {
        return {
            showAddPost: false,
            allPosts: [],
        }
    },
    created() {

        bus.$on('postCancelled', (data) => {
            this.showAddPost = data;
        });

        this.$http.get('https://vue-dashboard-dfb16.firebaseio.com/posts.json').then(function (data) {
            return data.json();
        }).then(function (data) {
            var postsArray = [];
            for (let key in data) {
                data[key].id = key
                postsArray.push(data[key]);
            }
            this.allPosts = postsArray;
        });
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

.post__button {
    display: block;
    margin-left: 3.52%;
}

.button_wrapper {
    display: block;
    width: 100%;
    margin-bottom: 20px;
}
</style>
