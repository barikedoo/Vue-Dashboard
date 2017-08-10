<template>
    <section class="add-post">
        <modal name="new-post" height="auto" :pivotY="0.1" :adaptive="true">
            <form action="" class="add-post__form" draggable="true" adaptive="true">
    
                <h2 class="add-post__title">Add new post</h2>
    
                <label for="post_name">Post header
                    <br>
                    <input id="post_name" type="text" class="add-post__name input_field" v-model="post.title">
                </label>
    
                <label for="post_body">Post body
                    <br>
                    <textarea id="post_body" cols="30" rows="10" class="input_field" style="resize:none" v-model="post.body"></textarea>
                </label>
    
                <label for="post_image">Add a picture link
                    <br>
                    <input id="post_image" type="text" class="add-post__image input_field" v-model="post.image">
                </label>
    
                <label for="post_tags">Add tags
                    <br>
                    <input id="post_tags" type="text" class="add-post__tags input_field" @keypress.enter.prevent="addHashtag" v-model="this.hashTag">
                </label>
    
                <li v-for="tag in this.post.hashTags" :key="tag.id"> {{ tag }} </li>
    
                <div class="new-post__buttons">
                    <button id="submit" class="post__button" @click.prevent="addPost">Send</button>
    
                    <button id="cancel" class="post__button" @click.prevent="cancelPost">Cancel</button>
                </div>
    
                <span id="submitedText" v-if="submited">Your post was successfully added!</span>
            </form>
        </modal>
    </section>
</template>

<script>
import { bus } from '../main'

export default {
    data() {
        return {
            submited: false,
            hashTag: '#',
            post: {
                title: '',
                body: '',
                img: '',
                date: '',
                hashTags: [],
            }
        }
    },
    methods: {
        addPost() {
            if (this.post.title == '') {
                alert('All fields must be filled');
            } else {
                var moment = require('moment');
                this.post.date = moment().format('MMMM Do YYYY, h:mm:ss')
                
                this.$http.post('https://vue-dashboard-dfb16.firebaseio.com/posts.json',
                    this.post).then(function (data) {
                        this.submited = true;
                        console.log(data);
                        if(data.status === 200) {
                            console.log('Збс');
                        }
                        console.log(this.post.date);    
                        this.post = {}
                        this.$emit('updatePosts');
                    });

            }
        },
        addHashtag() {
            if (hashTag.trim().length > 1) {
                if (hashTag.charAt(0) == '#') {
                    this.post.hashTags.push(hashTag);
                } else {
                    this.post.hashTags.push('#' + hashTag)
                };
            } else {
                alert('Поле не может быть пустым');
            }
            hashTag = '#';
        },

        cancelPost() {
            bus.$emit('postCancelled');
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
label {
    width: 97%;
    font-size: 20px;
    margin: 10px;
}

.add-post {
    display: block;
    width: 40%;
    margin-bottom: 20px;
    position: absolute;
    top: 20%;
    left: 30%;
    z-index: 100;

    &__form {
        display: flex;
        border: 2px solid gray;
        flex-direction: column;
        padding: 18px;
        width: 100%;
        background: white;
        box-sizing: border-box;
    }
}

.input_field {
    min-height: 30px;
    width: 100%;
    border: none;
    font-size: 16px;
    border: 1px solid lightgrey;
}

.post__button {
    background-color: #ea5a5a;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    width: 160px;
    height: 36px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
    border: none;
    border-radius: 16px;
    margin: 21px 32px 0;
    text-transform: uppercase;
    outline: none;
    display: inline-block;

    &:hover {
        cursor: pointer;
        background: lighten(#ea5a5a, 3%);
    }

    &:active {
        background: darken(#ea5a5a, 2%);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(234, 90, 90, 1);
        -moz-box-shadow: 0px 0px 10px 0px rgba(234, 90, 90, 1);
        box-shadow: 0px 0px 10px 0px rgba(234, 90, 90, 1);
    }
}

#submitedText {
    margin-top: 20px;
    font-size: 18px;
    color: green;
}
</style>
