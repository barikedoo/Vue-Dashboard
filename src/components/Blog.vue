<template>
    <section id="blog">
        <div class="button_wrapper">
             <button class="post__button" @click="showModal">Add new post</button> 
        </div>

            <app-new-post @updatePosts="loadData()"></app-new-post>

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
            allPosts: [],
            totalPosts: ''
        }
    },
    methods: {
        loadData() {
            this.$http.get('https://vue-dashboard-dfb16.firebaseio.com/posts.json').then(function (data) {
                return data.json();
            }).then(function (data) {
                var postsArray = [];
                for (let key in data) {
                    data[key].id = key
                    postsArray.push(data[key]);
                }
                this.allPosts = postsArray;
                this.totalPosts = this.allPosts.length;
                console.log(this.totalPosts); 
            });
        },

        showModal() {
            this.$modal.show('new-post')
        },
        hideModal() {
            this.$modal.hide('new-post')
        },
    },
    created() {

        bus.$on('postCancelled',() => {
            this.hideModal();
        });

        this.loadData();

    }
}
</script>

<style lang="scss" scoped>
#blog {
    width: 95%;
    display: flex;
    margin: 27px auto;
    min-height: 400px;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;
    position: relative;
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
