<template>
    <section class="add-post">
    
        <form action="" class="add-post__form">
    
            <h2 class="add-post__title">Add new post</h2>
    
            <label for="post_name">Post Name
                <br>
                <input id="post_name" type="text" class="add-post__name input_field" v-model="post.title">
            </label>
    
            <label for="post_body">Post body
                <br>
                <textarea id="post_body" cols="30" rows="10" class="input_field" style="resize:none"></textarea v-model="post.body">
            </label>
    
            <label for="post_image">Add a picture
                <br>
                <input id="post_image" type="text" class="add-post__image input_field" v-model="post.image">
            </label>
    
            <label for="post_tags">Add tags
                <br>
                <input id="post_tags" type="text" class="add-post__tags input_field" v-model="post.tags">
            </label>
    
            <button id="submit" @click="addPost">Send</button>
    
            <span slyle="font-size:16px; color:red;" v-if="submitted">Your post was successfully added!</span>
        </form>
    </section>
</template>

<script>

export default {

    data() {
        return {
            submitted: false,
            post: {
                title: '',
                body: '',
                img: '',
                tags: ''
            }
        }
    },
    methods: {
        addPost() {
            this.$http.post('https://vue-dashboard-dfb16.firebaseio.com/posts.json',
                this.post).then(function (data) {
                    console.log(data);
                    this.submitted = true;
                })
        },
    }
}
</script>

<style lang="scss" scoped>
label {
    width: 40%;
    font-size: 20px;
    margin: 10px;
}

.add-post {
    display: block;
    width: 100%;

    &__form {
        display: flex;
        border: 2px solid gray;
        flex-direction: column;
        padding: 20px;
    }
}

.input_field {
    min-height: 30px;
    width: 100%;
    border: none;
    font-size: 16px;
}

#submit {
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
</style>
