<template>
    <aside id="sidebar" class="sidebar">
    
        <div class="sidebar__header">
    
            <div class="sidebar__header__avatar">
            </div>
    
            <span class="sidebar__header__name">Tirion Lanister</span>
    
            <span class="sidebar__header__total-files">200 files</span>
    
            <button class="sidebar__header__upload">Upload</button>
    
        </div>
    
        <div class="sidebar__search">
            <input type="text" class="sidebar__search__input fa-placeholder" placeholder="Search files">
        </div>
    
        <div class="sidebar__lists">
            <h2 class="sidebar__lists__h2">Categories</h2>
            <li class="sidebar__lists__item">Photos</li>
            <li class="sidebar__lists__item">Videos</li>
            <li class="sidebar__lists__item">Projects</li>
        </div>
    
        <div class="sidebar__lists">
            <div id="albums">
                <h2 class="sidebar__lists__h2">Albums</h2>
                <div id="add-new-album">+</div>
            </div>
            <li class="sidebar__lists__item">Turkey 2013</li>
            <li class="sidebar__lists__item">Spain 2011</li>
            <li class="sidebar__lists__item">Omsk 2007</li>
        </div>
    
        <div class="sidebar__filters">
    
            <div class="sidebar__filters__4">4</div>
            <div class="sidebar__filters__2">2</div>
    
        </div>
    
    </aside>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },

}    
</script>

<style scoped lang="scss">
* {
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}

#sidebar {
    width: 17%;
    background: #272631;
}

#albums {
    display: flex;
    justify-content: space-between;
}

#add-new-album {
    font-size: 22px;
    display: block;
    margin-top: 55px;
    padding-right: 15px;
    color: #ea5a5a;

    &:hover {
        cursor: pointer;
        color: lighten(#ea5a5a, 10%);
    }
    &:active {
        color: darken(#ea5a5a, 3%);
    }
}

.sidebar {

    &__header {
        text-align: center;

        &__avatar {
            display: block;
            border-radius: 50%;
            background-color: #ffffff;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
            width: 80px;
            height: 80px;
            margin: 30px auto 18px;
        }

        &__name {
            display: block;
            color: #ffffff;
            font-size: 16px;
            font-weight: 700;
        }

        &__total-files {
            display: block;
            color: #a3a2a8;
            font-size: 14px;
            font-weight: 400;
        }

        &__upload {
            background-color: #ea5a5a;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
            width: 160px;
            height: 36px;
            color: #ffffff;
            font-size: 15px;
            font-weight: 400;
            border: none;
            border-radius: 16px;
            margin: 21px auto 32px;
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
    }

    &__search {
        overflow: hidden;

        &__input {
            width: 100%;
            height: 40px;
            outline: none;
            background: #1e1d26;
            border: none;
            line-height: 40px;
            color: #444444;
            font-size: 15.95px;
            text-align: left;
            transform: scaleY(1.0032);
            padding-left: 10px;
            border-bottom: 1px solid black;
        }
    }

    &__lists {

        &__h2 {
            color: #d7d6df;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 55px;
            padding-left: 15px;
            display: block;
        }

        &__item {
            list-style: none;
            margin-top: 10px;
            color: #d6d5df;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            padding: 10px 30px;


            &:hover {
                padding-left: 27px;
                border-left: 3px solid #ea5a5a;
                background: rgba(17, 17, 17, 0.4);
                cursor: pointer;
            }
            &:active {
                background: black;
                border-left: 3px solid darken(#ea5a5a, 10%);
            }
        }
    }

    &__filters {
        margin-top: 140px;
        display: flex;
        height: 40px;
        background: #19181e;
        justify-content: space-between;

        &__4,
        &__2 {
            display: block;
            color: #ea5a5a;
            padding: 8px 35px;

            &:hover {
                color: lighten(#ea5a5a, 10%);
                cursor: pointer;
            }
            &:active {
                color: darken(#ea5a5a, 3%);
            }
        }
    }
}
</style>
