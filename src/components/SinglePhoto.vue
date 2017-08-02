<template>
    <article id="photo" class="photo">
    
        <div class="photo__image" @mouseover="show = true" @mouseout="show = false">
            <img src="http://lorempixel.com/260/180/sports/" alt="" class="photo__image__pic">
    
            <div class="photo__image__panel" v-if="show">
                <p class="image__info">5:40</p>
                <p class="image__info">One night in Paris</p>
            </div>
        </div>
    
        <div class="photo__image__date">12.01.2015</div>
    
    </article>
</template>

<script>

export default {

    data() {
        return {
            show: false
        }
    }
}
</script>

<style scoped lang="scss">
.photo {

    width: 24%;
    min-height: 180px;
    background: transparent;
    border-radius: 5px;

    &__image {
        display: block;
        width: 100%;
        border-radius: 5px;
        transition: all 0.5s;

        &:hover {
            -webkit-box-shadow: 0px 0px 30px 6px rgba(144, 144, 144, 1);
            -moz-box-shadow: 0px 0px 30px 6px rgba(144, 144, 144, 1);
            box-shadow: 0px 0px 30px 6px rgba(144, 144, 144, 1);
        }

        &__pic {
            display: block;
            width: 100%;
            z-index: 2;
        }

        &__date {
            color: #c0c0c0;
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            margin-top: 5px;
        }
        &__panel {
            position: relative;
            height: 30px;
            z-index: 10;
            margin-top: -30px;
            display: flex;
            background-color: #a3a2a8;
            color: #ffffff;
            justify-content: space-around;
            line-height: 30px;
        }
    }
}

.image__info {
    font-size: 12px;
    font-weight: 400;
}
</style>
