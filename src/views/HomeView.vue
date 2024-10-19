
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
                        <h2 class="delivery__title">Рестораны</h2>
                        <form class="search__form" action="">
                            <a class="search__link" href=""><img src="../assets/images/other/search.svg" alt=""></a>
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
import { arrayOfRests } from '@/constants/rests';
import { store } from '../store/store';
import RestCard from '@/components/RestCard.vue';

</script>
