<template>
    <article class="post" :style="{width: postWidth }">
        <a href="">
    
            <div class="post__title"> {{ propPost.title }} </div>
    
            <div class="post__image">
                <img :src="propPost.image" alt="" class="post__image__pic">
            </div>
    
            <div class="post__preview"> {{ propPost.body }} </div>
    
            <div class="post__tags">
                <span class="post__tags__tag" :key="tag.id" v-for="tag in propPost.hashTags"> {{ tag }} </span>
            </div>
    
            <div class="post__date">
                <span> {{ propPost.date }} </span>
        </a>
        </div>
    
    </article>
</template>

<script>

import { bus } from '../main'

export default {

    props: ['propPost'],

    data() {
        return {
            date: '',
            postWidth: '24%'
        }
    },
    methods: {

    },
    created() {

        bus.$on('showTable', (data) => {
            this.postWidth = data;
        });

        console.log(this.propPost);
    },
}
</script>

<style lang="scss" scoped>
.post {
    width: 24%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 1.5%;
    border: 1px solid transparent;



    &__title {
        font-size: 24px;
        text-align: center;
        font-weight: 700;
    }

    &__image {

        &__pic {
            width: 100%;
        }
    }

    &__preview {
        // white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__tags {
        margin-top: 10px;

        &__tag {
            font-size: 14px;
            padding: 0 3px;
            color: blue;
        }
    }

    &__date {
        font-size: 12px;
        text-align: right;
        color: grey;
    }

    &__title,
    &__tags__tag,
    &__preview {
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>
