
<template>
     <!--Main-->
        <main class="main">
            <div class="container">
                <section class="main__promo">
                    <div class="promo__about">
                        <h1 class="main__header">Онлайн-сервис<br> доставки еды на дом</h1>
                        <p class="main__text">Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком</p>
                    </div>
                </section>

                <section class="delivery">
                    <div class="delivery__about">
                        <h2 class="title delivery__title">Рестораны</h2>
                        <form class="search__form" action="">
                            <img class="search__img" src="../assets/images/other/search.svg" alt="">
                            <input class="search__input" type="text" placeholder="Поиск блюд и ресторанов">
                        </form>
                    </div>

                    <div class="delivery__restaraunts" id="rests">
                       <RestCard
                        v-for="rest in arrayOfRests"
                        :rest ="rest"
                        :key="rest.id"
                       />
                    </div>
                </section>
            </div>

        </main>
</template>

<script setup>
import RestCard from '@/components/RestCard.vue';
import { arrayOfRests } from '@/constants/rests';

</script>

<style lang="scss">
.main__promo {
    width: 100%;
    height: 100%;

    margin-bottom: 5.6rem;
    padding:  6.8rem 7.1rem;

    background-image: url("../assets/images/other/promo.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    font-weight: 400;
    color: $black-promo-color;
    .promo__about {
        max-width: 53rem;
    }
    .main__header {
        margin-bottom: 1.5rem;  

        font-size: 3.9rem;
        font-weight: 700;
        line-height: 4.6rem;
        text-align: left;
    }
    .main__text {
        font-size: 2.4rem;
        line-height: 2.8rem;
    }
}
.delivery {
    .delivery__about {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;

        margin-bottom: 4.4rem;
    }

    .search__form {
        position: relative;
    }

    .search__input {
        width: 30rem;

        padding: 0.5rem 1.2rem 0.5rem 3.2rem;

        border: 1px solid $gray-text-color;
        border-radius: 2px;
        
        font-size: 1.6rem;

        outline: none;
    }

    .search__input::placeholder {
        color: $gray-text-color;
    }

    .search__img {
        position: absolute;
        top: 0.7rem;
        left: 1rem;
        z-index: 1;
    }
}

.delivery__restaraunts {
    display: flex;
    justify-content: center;
    gap: 1.3rem;
    flex-wrap: wrap;

    padding-bottom: 6rem;

    text-decoration: none;
}
</style>
