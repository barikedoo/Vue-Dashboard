<template>
    <article class="post">
    
        <div class="post__title"> {{ title }} </div>
    
        <div class="post__image">
             <img :src="image" alt="" class="post__image__pic"> 
        </div>
    
        <div class="post__preview"> {{ text }} </div>
    
        <div class="post__tags">
            <span class="post__tags__tag" :key="tag.id" v-for="tag in tags"> {{ tag }} </span>
        </div>

        <div class="post__date">
            <span> Posted : {{ date }} </span>
        </div>
    
    </article>
</template>

<script>
export default {
    data() {
        return {
            title: 'New post from a single post item',
            image: 'https://unsplash.it/300/250?image=972',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae aut doloribus facere voluptas cum architecto praesentium commodi expedita saepe unde.',
            tags: ['#dark', '#skyscraper', '#NYC'],
            date: '30.07.2017'
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.post {
    width: 24%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 1.5%;
    border:1px solid transparent;

        &:hover {
            border-color: lightslategrey;
        }

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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__tags{
        margin-top: 10px;

            &__tag{
                font-size: 14px;
                padding: 0 3px;
            }
    }

    &__date {
        margin-top: 5px;
        font-size: 12px;
        text-align: right;
        color: grey;
    }

    &__title, &__tags__tag, &__preview {
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>
