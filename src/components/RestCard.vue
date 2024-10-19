<template>
    <router-link class="restaraunt" :to= "`/rest?id=${rest.id}`">
        <div>
            <img class="restaraunt__image" :src="getUrl(rest.img)" alt="">
        </div>
        <div class="restaraunt__about">
            <div class="restaraunt__info">
                <h3 class="restaraunt__title">{{rest.title}}</h3>
                <p class="info-black time">{{rest.time}} мин</p>
            </div>
            <div class="raiting">
                <img class="star_img" src="../assets/images/other/star.svg" alt="">
                <p class="rank">{{rest.rank}}</p>
                <p class="price">От<span class="cost">{{rest.cost}}</span>₽<img class="dot" src="../assets/images/other/dot.svg" alt=""><span class="dish">{{rest.dish}}</span></p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'RestCard',
        props: {
            rest: {
                type: Object,
                required: true
            },
        },
        methods: {
            getUrl(img) {
                return new URL(`../assets/images/rests/${img}`, import.meta.url).href
            }
        }

    }

</script>