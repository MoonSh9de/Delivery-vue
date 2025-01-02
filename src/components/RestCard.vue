<template>
    <router-link class="restaraunt" :to="{ name: 'GoodsView', query: { id: rest.id } }">
        <div>
            <img class="restaraunt__image" :src="getUrl(rest.img)" alt="">
        </div>
        <div class="restaraunt__about">
            <div class="restaraunt__info">
                <h3 class="restaraunt__title">{{rest.title}}</h3>
                <p class="restaraunt__time">{{rest.time}} мин</p>
            </div>
            <div class="restaraunt__raiting">
                <img class="star_img" src="../assets/images/other/star.svg" alt="">
                <p class="rank">{{rest.rank}}</p>
                <p class="price">От<span class="cost">{{ rest.cost }}</span>₽<img class="dot" src="../assets/images/other/dot.svg" alt=""><span class="dish">{{ rest.dish }}</span></p>
            </div>
        </div>
    </router-link>
</template>

<script setup>
    const props = defineProps({
        rest: Object,
    })

    function getUrl(img) {
        return new URL(`../assets/images/rests/${img}`, import.meta.url).href;
    }
</script>

<style lang="scss">
.restaraunt {
    max-width: 38.4rem;
    height: 38rem;

    border-radius: 0.7rem;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);

    text-decoration: none;
    color: $black-color;

    cursor: pointer;
    transition: all 0.2s linear;

    .restaraunt__image {
        width: 100%;
        height: 25rem;

        margin-bottom: 2rem;
    }
    .restaraunt__about {
        padding: 0 2.4rem 3.5rem;

        @include mobile {
            padding: 0 1.6rem;
        }

        .restaraunt__info {
            display: flex;
            justify-content: space-between;

            margin-bottom: 2rem;

            .restaraunt__title {
                font-size: 2.4rem;
                font-weight: 700;

            }

            .restaraunt__time {
                align-content: center;

                padding: 0.5rem 1rem;

                background-color: $black-color;
                
                text-align: center;
                font-size: 1.3rem;
                color: $white-color;
            }
        } 
    }
    .restaraunt__raiting {
        display: flex;

    }
}

.restaraunt:hover {
    transform: scale(1.05);
}

</style>